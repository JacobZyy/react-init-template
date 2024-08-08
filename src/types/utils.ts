export type Merge<T, U> = {
  [K in keyof T | keyof U]: K extends keyof T & keyof U
    ? T[K] | U[K]
    : K extends keyof T
      ? T[K]
      : K extends keyof U
        ? U[K]
        : never;
}

export type BatchMergeType<T extends any[]> = T extends [infer F, ...infer R]
  ? R extends []
    ? F
    : Merge<F, BatchMergeType<R>>
  : never

export type RequiredKey<T, K extends keyof T > = Omit<T, K> & Required<Pick<T, K>>
