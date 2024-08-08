export enum ENVLocalEnum {
  development = 'dev',
  // eslint-disable-next-line ts/no-duplicate-enum-values
  test = 'dev',
  production = 'prod',
}

export type ViteEnvTypes = 'development' | 'test' | 'production' | string
