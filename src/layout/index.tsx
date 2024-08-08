import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { clsx } from 'clsx'

import {
  Footer,
  Header,
  NavMenu,
} from './components'
// import { authorization } from '@/utils'

function Component() {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)

  const headerHideCls = clsx('h-16 w-full flex-none')
  const navBannerCls = clsx('z-top-less-5 w-25 shrink-0')
  const footerCls = clsx('bg-black-900/80')

  return (
    <div className="relative flex size-full flex-col">
      <div className={headerHideCls}>
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>
      <div className="flex flex-1">
        <div className={navBannerCls}>
          <NavMenu sideBarOpen={sidebarOpen} />
        </div>
        <div className="flex w-full flex-1 flex-col">
          <Outlet />
          <div className={footerCls}>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

Component.displayName = 'Layout'

export { Component }
