import { Environments } from './environments.constants'

export class Endpoints {
  static AUTHENTICATION = '/autenticacao'
  static PROFILE = '/perfil'

  static getApiUrl() {
    const ENV = Environments.getCurrent()

    return ENV.API_URL
  }

  static getAuthorizationUrl() {
    const ENV = Environments.getCurrent()

    return ENV.API_AUTH_URL
  }
}
