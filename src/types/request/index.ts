export type Token = {
  access_token: string
  refresh_token: string
}

export type TokenWithUserId = {
  user_id: number
} & Token

export type TokenWithExpirationTime = TokenWithUserId & {
  expiration_time: number
}

export type BaseHeaderType = {
  'Device-Type': DEVICE_TYPE
  // 'APP-VERSION': Env.AppVersion,
  'Authorization'?: string
  'Request-Id'?: string
}

export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

export type RequestProps = {
  /** 缓存时间，单位为s。默认强缓存，0为不缓存 */
  cacheTime?: number
  /** 是否触发刷新token的校验 */
  skipTokenRefresh?: boolean
  params?: Record<string, any>
  url: string
  /**
   *  @default /luffy
   */
  urlPrefix?: `/${string}`
  method: Method
}

export type RequestParams = Omit<RequestProps, 'url' | 'method'>

export type ExtraRequestParams = Omit<RequestParams, 'params'>

export type CustomSWRKeyType = { url: string, params?: RequestParams } | string

export type ResponseType<T> = {
  data: T
  msg: string
  err_code: number
}

export type RequestCacheInfoConfig = { next: { revalidate: number } } | { cache: 'no-store' } | { cache: 'force-cache' }

export enum DEVICE_TYPE {
  mobile = '1',
  web = '2',
}
