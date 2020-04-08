import ENV from 'app-config/enviroments'

let CURRENT_ENV = __DEV__ ? ENV.DEV : ENV.PRD

export class Environments {
  static getCurrent() {
    return CURRENT_ENV
  }

  static setDev() {
    CURRENT_ENV = ENV.DEV
  }

  static setPrd() {
    CURRENT_ENV = ENV.PRD
  }

  static setHml() {
    CURRENT_ENV = ENV.HML
  }
}
