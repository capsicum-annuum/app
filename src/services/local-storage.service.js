import { AsyncStorage } from 'react-native'

export class LocalStorageService {
  setString(key, value) {
    const stringifiedValue = value.toString()

    return AsyncStorage.setItem(key, stringifiedValue)
  }

  getString(key) {
    return AsyncStorage.getItem(key)
  }

  removeString(key) {
    return AsyncStorage.removeItem(key)
  }

  setObject(key, object) {
    const value = JSON.stringify(object)

    return AsyncStorage.setItem(key, value)
  }

  getObject(key) {
    return AsyncStorage.getItem(key).then((stringifiedObject) => {
      return JSON.parse(stringifiedObject)
    })
  }
}
