/// <reference types="vite/client" />

type ImportMetaEnv = {
  readonly VITE_APP_TITLE: string
  readonly NODE_ENV: string
  readonly VITE_PUBLIC_PATH: string
  readonly VITE_API_BASE_URL: string
  readonly VITE_API_SERVER_URL: string
  // 更多环境变量...
}

type ImportMeta = {
  readonly env: ImportMetaEnv
}
