import dayjs from 'dayjs'

import type { TokenWithExpirationTime, TokenWithUserId } from '@/types'
import { COOKIE_KEYS } from '@/types/authorization'
import { storage } from '@/utils'

class Authorization {
  private static instance: Authorization | null = null

  public static getInstance(): Authorization {
    if (!Authorization.instance)
      Authorization.instance = new Authorization()
    return Authorization.instance
  }

  setToken(userToken: Required<TokenWithUserId>): void {
    const tokenWithExpirationTime: TokenWithExpirationTime = {
      ...userToken,
      expiration_time: dayjs().add(0.9, 'h').valueOf(),
    }
    storage.set(COOKIE_KEYS.userToken, tokenWithExpirationTime)
  }

  removeToken() {
    storage.remove(COOKIE_KEYS.userToken)
  }

  getToken(): Partial<TokenWithUserId> | undefined {
    const tokensMap = storage.get<TokenWithUserId>(COOKIE_KEYS.userToken)
    if (!tokensMap)
      return
    const { access_token, refresh_token, user_id } = tokensMap
    return {
      access_token,
      refresh_token,
      user_id,
    }
  }

  isTokenExpired(): boolean {
    const { expiration_time: expirationTime } = storage.get<TokenWithExpirationTime>(COOKIE_KEYS.userToken) || {}
    return !!expirationTime && dayjs(expirationTime).isBefore(dayjs())
  }
}

export const authorization = Authorization.getInstance()
