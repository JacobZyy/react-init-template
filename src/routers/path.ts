import type { RouteObject } from './type'

const devOnlyRoutes: RouteObject[] = [
]

export const routerList: RouteObject[] = [
  {
    index: true,
    lazy: () => import('@/pages/Home'),
    handle: {
      meta: {
        title: 'home',
        key: 'home',
      },
    },
  },
  ...(import.meta.env.DEV ? (devOnlyRoutes) : []),
]
