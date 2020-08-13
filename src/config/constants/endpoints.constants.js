import { Environments } from './environments.constants'

export class Endpoints {
  static USER_VALIDATE = '/user/validate'
  static SKILL = '/skill'
  static CAUSE = '/cause'

  static getApiUrl() {
    const ENV = Environments.getCurrent()

    return ENV.API_URL
  }

  static getApiUploadUrl() {
    const ENV = Environments.getCurrent()

    return ENV.API_UPLOAD_URL
  }
}
