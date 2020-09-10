import * as React from 'react';
import { useCallback } from 'react';
import { Redirect, withRouter } from 'react-router-dom';

import { useKeycloak } from '@react-keycloak/web';

const LoginPage = withRouter(({ location }) => {
  const currentLocationState: { [key: string]: unknown } = location.state || {
    from: { pathname: '/home' },
  };
  const { keycloak } = useKeycloak();
  const login = useCallback(() => {
    keycloak?.login();
  }, [keycloak]);

  if (keycloak?.authenticated)
    return <Redirect to={currentLocationState?.from as string} />;

  return (
    <div>
      <button type="button" onClick={login}>
        Login
      </button>
    </div>
  );
});

export default LoginPage;
