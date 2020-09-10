import Keycloak from 'keycloak-js';

// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'
const keycloak = Keycloak({
  url: 'http://localhost:8080/auth',
  realm: 'Test',
  clientId: 'react-test',
});

export default keycloak;
