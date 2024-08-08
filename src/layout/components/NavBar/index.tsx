import { clsx } from 'clsx'

import { verticalMenuItems } from '@/layout/type'

import { NavButton } from './NavButton'

import './index.css'

type NavMenuProps = {
  sideBarOpen: boolean
}

export function NavMenu({ sideBarOpen }: NavMenuProps) {
  return (
    <ul
      className={clsx(
        'nav-menu-banner nav-menu-banner-vertical',
        sideBarOpen ? 'w-[10.75rem]' : 'w-13',
      )}
    >
      {verticalMenuItems.map(({ ...menuItem }) => {
        return (
          <NavButton
            key={menuItem.type}
            titleClassName={clsx({ 'md:hidden': !sideBarOpen })}
            {...menuItem}
          />
        )
      })}
    </ul>
  )
}
