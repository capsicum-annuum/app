import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { OnboardingScreen, RegisterScreen, LoginScreen } from 'app-screens'
import { Screens } from 'app-constants'

export const UnauthenticatedStack = () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={Screens.ONBOARDING} component={OnboardingScreen} />
      <Stack.Screen name={Screens.LOGIN} component={LoginScreen} />
      <Stack.Screen name={Screens.REGISTER} component={RegisterScreen} />
    </Stack.Navigator>
  )
}
