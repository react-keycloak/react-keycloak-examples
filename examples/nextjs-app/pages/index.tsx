import { useKeycloak } from '@react-keycloak/ssr'
import type { KeycloakInstance, KeycloakTokenParsed } from 'keycloak-js'

import { Layout } from '../components/Layout'

type ParsedToken = KeycloakTokenParsed & {
  email?: string

  preferred_username?: string

  given_name?: string

  family_name?: string
}

const IndexPage = () => {
  const { keycloak } = useKeycloak<KeycloakInstance>()
  const parsedToken: ParsedToken | undefined = keycloak?.tokenParsed

  const loggedinState = keycloak?.authenticated ? (
    <span className="text-success">logged in</span>
  ) : (
    <span className="text-danger">NOT logged in</span>
  )

  const welcomeMessage =
    keycloak?.authenticated || (keycloak && parsedToken)
      ? `Welcome back ${parsedToken?.preferred_username ?? ''}!`
      : 'Welcome visitor. Please login to continue.'

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1 className="mt-5">Hello Next.js + Keycloak 👋</h1>
      <div className="mb-5 lead text-muted">
        This is an example of a Next.js site using Keycloak.
      </div>

      <p>You are: {loggedinState}</p>
      <p>{welcomeMessage}</p>
    </Layout>
  )
}

export default IndexPage
