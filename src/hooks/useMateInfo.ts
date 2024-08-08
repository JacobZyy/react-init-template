import { useMatches } from 'react-router-dom'

export type MetaDataType = {
  title?: string
  description?: string
  key?: string
}

function useMetaInfo() {
  const routeMatches = useMatches()
  return routeMatches.map<MetaDataType | undefined>(({ handle }) => {
    const { meta } = (handle || {}) as { meta: MetaDataType }
    return meta
  }).filter(Boolean).at(-1)
}

export { useMetaInfo }
