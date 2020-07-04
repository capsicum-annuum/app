import {
  HttpService,
  LocalStorageService,
  SecureStoreService,
} from 'app-services'
import { Authorization } from 'app-config/constants'

export class LoginService {
  constructor() {
    this.httpService = new HttpService()
    this.localStorageService = new LocalStorageService()
    this.secureStoreService = new SecureStoreService()

    this.login = this.login.bind(this)
  }

  login({ username, password }) {
    return this.httpService
      .post('/login', null, { username, password })
      .then(({ token }) => {
        this.localStorageService.setString(Authorization.ACCESS_TOKEN, token)

        return this.secureStoreService.setCredentials({ username, password })
      })
      .catch((error) => {
        console.log('LoginService login', error)

        throw error
      })
  }
}
