import { HttpService } from 'app-services'

export class RegisterService {
  constructor() {
    this.httpService = new HttpService()

    this.checkBaseUserData = this.checkBaseUserData.bind(this)
    this.fetchSkills = this.fetchSkills.bind(this)
    this.fetchCauses = this.fetchCauses.bind(this)
  }

  checkBaseUserData(data) {
    return this.httpService
      .post('/user/validate', null, data)
      .then((response) => response)
      .catch((error) => error)
  }

  fetchSkills() {
    return this.httpService
      .get('/skill')
      .then(({ skills }) => skills)
      .catch((error) => error)
  }

  fetchCauses() {
    return this.httpService
      .get('/cause')
      .then(({ causes }) => causes)
      .catch((error) => error)
  }
}
