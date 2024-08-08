import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

import { ApiError } from '@/utils'

export function ErrorBoundary() {
  const error = useRouteError()

  console.error(error)
  if (error instanceof ApiError) {
    return (
      <div className="size-full">
        {error.name}
        {error.message}
        Un caught http error! please check the source code
      </div>
    )
  }

  if (isRouteErrorResponse(error) && error.status === 401) {
    // console.log('401 error')
    // the response json is automatically parsed to
    // `error.data`, you also have access to the status
    return (
      <div className="">
        <h1>{error.status}</h1>
        <h2>{error.data.sorry}</h2>
        <p>
          Go ahead and email
          {' '}
          {error.data.hrEmail}
          {' '}
          if you
          feel like this is a mistake.
        </p>
      </div>
    )
  }
  return <div>erroring</div>
}
