import type { Dispatch, SetStateAction } from 'react'
import { useRef } from 'react'
import { useClickAway } from 'ahooks'

type HeaderProps = {
  sidebarOpen: boolean
  setSidebarOpen: Dispatch<SetStateAction<boolean>>
}

export function Header({ setSidebarOpen, sidebarOpen }: HeaderProps) {
  const sidebarTriggerRef = useRef<HTMLLabelElement>(null)

  useClickAway(() => {
    sidebarOpen && setSidebarOpen(false)
  }, sidebarTriggerRef)

  return (
    <div className="fixed top-0 z-top flex h-16 w-full justify-between bg-black-900 px-8 py-4">
      header
    </div>
  )
}
