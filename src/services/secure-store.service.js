import * as SecureStore from 'expo-secure-store'
import { Authorization } from 'app-constants'

export class SecureStoreService {
  setCredentials({ username, password }) {
    const value = JSON.stringify({ username, password })

    return SecureStore.setItemAsync(Authorization.LOGIN_CREDENTIALS, value)
  }

  getCredentials() {
    return SecureStore.getItemAsync(Authorization.LOGIN_CREDENTIALS).then(
      (value) => {
        const { username, password } = JSON.parse(value)

        return { username, password }
      },
    )
  }

  deleteCredentials() {
    return SecureStore.deleteItemAsync(Authorization.LOGIN_CREDENTIALS)
  }
}
