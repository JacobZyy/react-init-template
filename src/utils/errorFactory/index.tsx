import type { ResponseType } from '@/types'

export class ApiError extends Error {
  public responseErrorInfo: Omit<ResponseType<unknown>, 'data'>

  constructor({ data, ...responseInfo }: ResponseType<unknown>) {
    super(responseInfo.msg)
    this.name = 'ApiError'
    this.responseErrorInfo = responseInfo
  }

  // public toast(config?: Omit<ToastConfig, 'content'>, toastType: ToastType = 'error') {
  //   const { type = toastType, ...restConfig } = config ?? {}
  //   Toast[type]({
  //     content: this.message,
  //     ...restConfig,
  //   })
  // }
}

export class AuthenticationError extends ApiError {
  constructor(responseInfo: ResponseType<unknown>) {
    super(responseInfo)
    this.name = 'AuthenticationError'
  }
}

export class ValidationError extends ApiError {
  constructor(responseInfo: ResponseType<unknown>) {
    super(responseInfo)
    this.name = 'ValidationError'
  }
}

export class NotFoundError extends ApiError {
  constructor(responseInfo: ResponseType<unknown>) {
    super(responseInfo)
    this.name = 'NotFoundError'
  }
}

export class RateLimitError extends ApiError {
  constructor(responseInfo: ResponseType<unknown>) {
    super(responseInfo)
    this.name = 'RateLimitError'
  }
}

export class InternalServerError extends ApiError {
  constructor(responseInfo: ResponseType<unknown>) {
    super(responseInfo)
    this.name = 'InternalServerError'
  }
}

export class BadRequestError extends ApiError {
  constructor(responseInfo: ResponseType<unknown>) {
    super(responseInfo)
    this.name = 'BadRequestError'
  }
}

export class ApiErrorFactory {
  private static errorMap: Record<number, typeof ApiError> = {
    401: AuthenticationError,
    422: ValidationError,
    404: NotFoundError,
    429: RateLimitError,
    500: InternalServerError,
    400: BadRequestError,
  }

  static createError(httpCode: number, responseInfo: ResponseType<unknown>) {
    const ErrorClass = this.errorMap[httpCode] || ApiError
    return new ErrorClass(responseInfo)
  }
}
