import { RouterProvider } from 'react-router-dom'

import { routes } from '@/routers'

function App() {
  return (
    <RouterProvider fallbackElement={<>top loading....</>} router={routes} />
  )
}

export default App
