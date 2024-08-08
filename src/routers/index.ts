import { createBrowserRouter } from 'react-router-dom'

import { ErrorBoundary } from '@/components'

import { routerList } from './path'

export const routes = createBrowserRouter([
  {
    ErrorBoundary,
    children: [
      {
        path: '/',
        lazy: () => import('@/layout'),
        children: [
          ...routerList,
        ],
      },
    ],
  },
])

export * from './type'
