
import * as React from 'react';
import { useCallback } from 'react';
import { Redirect, useLocation } from 'react-router-dom';


import { useKeycloak } from '@react-keycloak/web'
import type { KeycloakInstance } from 'keycloak-js'


const LoginPage = () => {
  const location = useLocation();
  const currentLocationState: { [key: string]: unknown } = location.state || {
    from: { pathname: '/home' },
  }

  const { keycloak } = useKeycloak<KeycloakInstance>()

  const login = useCallback(() => {
    keycloak?.login()
  }, [keycloak])

  if (keycloak?.authenticated)
    return <Redirect to={currentLocationSte?.from as string} />

  return (
    <div>
      <button type="button" onClick={login}>
        Login
      </button>
    </div>

  );
};

export default LoginPage
