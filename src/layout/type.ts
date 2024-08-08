export enum NavMenuEnum {
  explore = 'explore',
  chats = 'chats',
  vip = 'vip',
  diamond = 'diamond',
  profile = 'profile',
}

export type NavMenuItemType = {
  type: NavMenuEnum
  title: string
  icon: string
  wrapperClassName?: string
  titleClassName?: string
  targetPath: string
  state?: any
}

export const horizontalMenuItems: NavMenuItemType[] = [
  {
    type: NavMenuEnum.explore,
    title: 'Explore',
    icon: 'icon-[xoxogf--explore]',
    targetPath: '/',
  },
  {
    type: NavMenuEnum.chats,
    title: 'Chats',
    icon: 'icon-[xoxogf--chats]',
    targetPath: '/chat/list',
  },
  {
    type: NavMenuEnum.profile,
    title: 'Profile',
    icon: 'icon-[xoxogf--profile]',
    targetPath: '/profile',
  },
]

export const verticalMenuItems: NavMenuItemType[] = [
  {
    type: NavMenuEnum.explore,
    title: 'Explore',
    icon: 'icon-[xoxogf--explore]',
    targetPath: '/',
  },
  {
    type: NavMenuEnum.chats,
    title: 'Chats',
    icon: 'icon-[xoxogf--chats]',
    targetPath: '/chat/list',

  },
  {
    type: NavMenuEnum.vip,
    title: 'Profile',
    icon: 'icon-[xoxogf--vip]',
    wrapperClassName: 'shadow-[inset_0_0_1.25rem] shadow-third/40',
    targetPath: '/plus',
  },
  {
    type: NavMenuEnum.diamond,
    title: 'Profile',
    icon: 'icon-[xoxogf--diamond]',
    wrapperClassName: 'shadow-[inset_0_0_1.25rem] shadow-primary-500/40',
    targetPath: '/diamond',
  },
]
