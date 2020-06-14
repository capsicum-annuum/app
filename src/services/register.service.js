import { HttpService } from 'app-services'

export class RegisterService {
  constructor() {
    this.httpService = new HttpService()

    this.checkBaseUserData = this.checkBaseUserData.bind(this)
    this.fetchSkills = this.fetchSkills.bind(this)
    this.fetchCauses = this.fetchCauses.bind(this)
  }

  checkBaseUserData(data) {
    data.cnpj = data.cnpj || null
    
    return this.httpService
      .post('/user/validate', null, data)
      .then(() => {
        return { message: 'Success' }
      })
      .catch((error) => {
        console.log('registerService.checkBaseUserData', error)
        return error
      })
  }

  fetchSkills() {
    return this.httpService
      .get('/skill')
      .then(({ skills }) => skills)
      .catch((error) => {
        console.log('registerService.fetchSkills', error)
        return error
      })
  }

  fetchCauses() {
    return this.httpService
      .get('/cause')
      .then(({ causes }) => causes)
      .catch((error) => {
        console.log('registerService.fetchCauses', error)
        return error
      })
  }
}
