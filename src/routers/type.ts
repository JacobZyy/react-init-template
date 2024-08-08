import type { RouteObject } from 'react-router-dom'

import type { MetaDataType } from '@/hooks'

type HandleType = {
  /**
   * @description 是否需要登录
   */
  requiresAuth?: boolean
  /**
   * @description seo 用， meta信息
   */
  meta?: MetaDataType
}

type AttachHandleType<T extends RouteObject, Q extends keyof T, K> = {
  [key in keyof T]: key extends Q ? K : T[key]
}

type RouteObjectWithHandle = AttachHandleType<RouteObject, 'handle', HandleType>

export type { RouteObjectWithHandle as RouteObject }
