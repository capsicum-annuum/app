import React from 'react'
import { StatusBar } from 'react-native'

import { Provider } from 'react-redux'
import { initializeStore } from 'app-redux'

import { NavigationContainer } from '@react-navigation/native'
import { Router } from 'app-routes'

const App = () => {
  return (
    <Provider store={initializeStore}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <Router />
      </NavigationContainer>
    </Provider>
  )
}

export default App
