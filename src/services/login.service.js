import { HttpService, LocalStorageService } from 'app-services'
import { Authorization } from 'app-config/constants'

export class LoginService {
  constructor() {
    this.httpService = new HttpService()
    this.localStorageService = new LocalStorageService()
  }

  login({ username, password }) {
    const data = { username, password }

    return this.httpService
      .post('/sessions', null, data)
      .then(({ token }) => {
        console.log('response', response)

        localStorageService.setString(Authorization.ACCESS_TOKEN, token)
        return response
      })
      .catch((error) => {
        console.log('LoginService login', error)

        return error
      })
  }
}
