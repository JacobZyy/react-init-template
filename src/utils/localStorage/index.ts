class Storage {
  private static instance: Storage | null = null
  static getInstance(): Storage {
    if (!Storage.instance)
      Storage.instance = new Storage()
    return Storage.instance
  }

  get<T = any>(key: string): T | null {
    const storageData = localStorage.getItem(key)
    return JSON.parse(storageData || 'null') as T
  }

  set<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value))
  }

  remove(key: string): void {
    localStorage.removeItem(key)
  }
}

export const storage = Storage.getInstance()
