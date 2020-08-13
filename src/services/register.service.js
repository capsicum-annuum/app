import { HttpService, UploadService } from 'app-services'
import { Endpoints } from 'app-constants'

export class RegisterService {
  constructor() {
    this.httpService = new HttpService()
    this.uploadService = new UploadService()

    this.registerRequest = this.registerRequest.bind(this)
    this.checkBaseUserData = this.checkBaseUserData.bind(this)
    this.fetchSkills = this.fetchSkills.bind(this)
    this.fetchCauses = this.fetchCauses.bind(this)
  }

  registerRequest(data) {
    const {
      location: addressRequest,
      causes: causeThatSupport,
      skills: userSkills,
      availability,
      description,
      email,
      name,
      password,
      photo,
      phone,
    } = data

    const sendData = {
      addressRequest,
      causeThatSupport,
      description,
      email,
      name,
      password,
      phone,
      userSkills,
      availability: {
        dayShiftAvailabilities: [...availability],
      },
    }

    return this.uploadService
      .uploadImage(photo)
      .then((imageResponse) => {
        sendData.profilePictureUrl = imageResponse.imageUri
        sendData.profilePictureKey = imageResponse.key

        return this.httpService
          .post('/user-volunteer', null, sendData)
          .then((response) => {
            console.log('register success', response)
            return response
          })
      })
      .catch((error) => {
        console.log('registerService.request', error)
        throw error
      })
  }

  checkBaseUserData(data) {
    data.cnpj = data.cnpj || null

    return this.httpService
      .post(Endpoints.USER_VALIDATE, null, data)
      .then(() => {
        return { message: 'Success' }
      })
      .catch((error) => {
        console.log('registerService.checkBaseUserData', error)
        throw error
      })
  }

  fetchSkills() {
    return this.httpService
      .get(Endpoints.SKILL)
      .then(({ skills }) => skills)
      .catch((error) => {
        console.log('registerService.fetchSkills', error)
        throw error
      })
  }

  fetchCauses() {
    return this.httpService
      .get(Endpoints.CAUSE)
      .then(({ causes }) => causes)
      .catch((error) => {
        console.log('registerService.fetchCauses', error)
        throw error
      })
  }
}
