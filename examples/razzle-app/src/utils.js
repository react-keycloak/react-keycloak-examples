const serverEnv = (key, def) => process?.env?.[key] ?? def

function getKeycloakConfig() {
  return typeof window !== 'undefined' && window.env !== 'undefined'
    ? {
        // client
        url: window.env.url,
        clientId: window.env.clientId,
        realm: window.env.realm
      }
    : {
        // server
        url: serverEnv('KEYCLOAK_URL', 'http://localhost:8080/auth'),
        clientId: serverEnv('KEYCLOAK_CLIENT_ID', 'react-test'),
        realm: serverEnv('KEYCLOAK_REALM', 'Test'),
      }
}

export { getKeycloakConfig }
