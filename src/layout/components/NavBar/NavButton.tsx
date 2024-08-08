import { Link, useLocation } from 'react-router-dom'
import clsx from 'clsx'

import type { NavMenuItemType } from '@/layout/type.ts'

import './index.css'

type NavButtonProps = NavMenuItemType

export function NavButton({ targetPath, state, title, wrapperClassName, titleClassName, icon }: NavButtonProps) {
  const { pathname } = useLocation()
  const isActive = pathname === targetPath
  return (
    <li>
      <Link
        to={targetPath}
        state={state}
        className={clsx(
          wrapperClassName,
          'nav-menu-item',
          {
            'opacity-100': isActive,
            'opacity-50': !isActive,
          },
        )}
      >
        <div className={clsx('md:text-3.5xl shrink-0 text-xl', icon)} />
        <div className={clsx(titleClassName, 'nav-menu-text')}>{title}</div>
      </Link>
    </li>
  )
}
