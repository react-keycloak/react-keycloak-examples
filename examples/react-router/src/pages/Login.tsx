import * as React from 'react'
import { useCallback } from 'react'
import { Redirect, withRouter } from 'react-router-dom'

import { useKeycloak } from '@react-keycloak/web'
import type { KeycloakInstance } from 'keycloak-js'

const LoginPage = withRouter(({ location }) => {
  const currentLocationState = (location.state as {
    [key: string]: unknown
  }) || {
    from: { pathname: '/home' },
  }

  const { keycloak } = useKeycloak<KeycloakInstance>()

  const login = useCallback(() => {
    keycloak?.login()
  }, [keycloak])

  if (keycloak?.authenticated)
    return <Redirect to={currentLocationState?.from as string} />

  return (
    <div>
      <button type="button" onClick={login}>
        Login
      </button>
    </div>
  )
})

export default LoginPage
