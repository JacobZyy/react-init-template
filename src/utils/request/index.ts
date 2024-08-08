import dayjs from 'dayjs'
import queryString from 'query-string'
import { v4 as uuidv4 } from 'uuid'

import type { BaseHeaderType, CustomSWRKeyType, Method, RequestCacheInfoConfig, RequestParams, RequestProps, ResponseType, Token } from '@/types'
import { DEVICE_TYPE } from '@/types'
import { ApiErrorFactory, authorization } from '@/utils'

const fakeToken: ResponseType<Token> = {
  data: {
    access_token: 'test1',
    refresh_token: 'test2',
  },
  msg: 'success',
  err_code: 200,
}

class Request {
  private static requestInstance: Request | null = null
  private refreshPromise: Promise<ResponseType<Token>> | null = null

  public static getInstance() {
    if (!Request.requestInstance)
      Request.requestInstance = new Request()
    return Request.requestInstance
  }

  public generateRequestId() {
    const { user_id = 0 } = authorization.getToken() ?? {}
    return `${user_id}-${dayjs().format('YYYYMMDDHHmmss')}-${uuidv4().replaceAll('-', '')}`
  }

  // /**
  //  * 校验登录状态
  //  */
  // public verifyLoginState() {
  //   const { access_token, refresh_token, user_id } = authorization.getToken() ?? {}
  //
  //   // TODO: 增加user_id和当前存储的id是否一致的判断
  //   const isSameUser = !!user_id
  //
  //   const isLogin = (!!access_token && !!refresh_token && isSameUser)
  //   if (!isLogin)
  //     throw new Error('not login')
  // }

  /**
   * 无感刷新token
   */
  public async refreshToken() {
    const originToken = authorization.getToken()
    const shouldRefresh = authorization.isTokenExpired()
    if (!originToken || !shouldRefresh)
      return

    const { user_id = 0 } = originToken
    try {
      if (!this.refreshPromise) {
        this.refreshPromise = Promise.resolve(fakeToken)
      // this.refreshPromise = refreshTokenApi(tokenDatas, { TODO: format api
      //   skipTokenRefresh: true,
      // })
      }
      const { data: updatedToken } = await this.refreshPromise

      // 刷新之后置为null
      if (this.refreshPromise)
        this.refreshPromise = null

      const { access_token = '', refresh_token = '' } = updatedToken
      authorization.setToken({
        user_id,
        access_token,
        refresh_token,
      })
    }
    catch (error) {
      console.error('refreshToken failed')
    }
  }

  /**
   * 请求拦截器
   */
  private async interceptorsRequest({ url, method, params, cacheTime }: RequestProps) {
    let queryParams = '' // url参数
    let requestPayload = '' // 请求体数据
    // 请求头
    const headers: BaseHeaderType = {
      'Request-Id': this.generateRequestId(),
      'Device-Type': DEVICE_TYPE.web,
    }
    const { access_token: token } = authorization.getToken() ?? {}
    if (token)
      headers.Authorization = `Bearer ${token}`
    const config: RequestCacheInfoConfig
      = cacheTime || cacheTime === 0
        ? cacheTime > 0
          ? { next: { revalidate: cacheTime } }
          : { cache: 'no-store' }
        : { cache: 'force-cache' }

    if (method === 'GET' || method === 'DELETE') {
      // fetch对GET请求等，不支持将参数传在body上，只能拼接url
      if (params) {
        queryParams = queryString.stringify(params)
        url = `${url}?${queryParams}`
      }
    }
    else {
      // 非form-data传输JSON数据格式
      if (!['[object FormData]', '[object URLSearchParams]'].includes(Object.prototype.toString.call(params))) {
        Object.assign(headers, { 'Content-Type': 'application/json' })
        requestPayload = JSON.stringify(params)
      }
    }

    const options: RequestInit = {
      method,
      headers,
      body: method !== 'GET' && method !== 'DELETE' ? requestPayload : undefined,
      ...config,
    }

    return {
      url,
      options,
    }
  }

  /**
   * 响应拦截器
   */
  private interceptorsResponse<T>(res: Response): Promise<ResponseType<T>> {
    return new Promise((resolve, reject) => {
      if (res.ok) {
        resolve(res.json() as Promise<ResponseType<T>>)
      }
      else {
        const clonedResponse = res.clone()
        clonedResponse.json().then((data) => {
          const error = ApiErrorFactory.createError(clonedResponse.status, data)
          return reject(error)
        }).catch((error) => {
          reject(error)
        })
      }
    })
  }

  private async httpFactory<T>(props: RequestProps): Promise<ResponseType<T>> {
    const { url, method, urlPrefix = import.meta.env.VITE_API_BASE_URL, params = {}, cacheTime = 0, skipTokenRefresh } = props
    // if (!skipLoginValidation)
    //   this.verifyLoginState()

    if (!skipTokenRefresh)
      await this.refreshToken()

    const req = await this.interceptorsRequest({
      url: `${urlPrefix}${url}`,
      method,
      params,
      cacheTime,
    })
    const res = await fetch(req.url, req.options)
    return this.interceptorsResponse<T>(res)
  }

  public async request<T>(method: Method, url: string, params?: RequestParams) {
    return this.httpFactory<T>({ url, method, ...params })
  }

  public get<T = any>(url: string, params?: RequestParams) {
    return this.request<T>('GET', url, params)
  }

  public post<T = any>(url: string, params?: RequestParams) {
    return this.request<T>('POST', url, params)
  }

  public put<T = any>(url: string, params?: RequestParams) {
    return this.request<T>('PUT', url, params)
  }

  public delete<T = any>(url: string, params?: RequestParams) {
    return this.request<T>('DELETE', url, params)
  }

  public patch<T = any>(url: string, params?: RequestParams) {
    return this.request<T>('PATCH', url, params)
  }
}

export const request = Request.getInstance()

/**
 * @deprecated 暂时先不能用，类型推导还有缓存全局config有问题，请求优先直接走request方法
 */
export function swrGetFetcher({ url, params }: { url: string, params?: RequestParams }) {
  return request.get(url, params)
}

/**
 * @deprecated 暂时先不能用，类型推导还有缓存全局config有问题，请求优先直接走request方法
 */
export function swrPostFetcher<DataType, ParamsType extends CustomSWRKeyType = CustomSWRKeyType>(input: ParamsType) {
  if (typeof input === 'string')
    return request.post<DataType>(input)
  const { url, params } = input
  return request.post<DataType>(url, params)
}
