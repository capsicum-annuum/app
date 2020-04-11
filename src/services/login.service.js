import { HttpService } from 'app-services'

export class LoginService {
  constructor() {
    this.httpService = new HttpService()
  }

  login({ username, password }) {
    const data = { email: username, password }

    return this.httpService
      .post('/sessions', null, data)
      .then((response) => {
        console.log('response', response)

        return response
      })
      .catch((error) => {
        console.log('LoginService login', error)

        return error
      })
  }
}
