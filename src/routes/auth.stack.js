import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import {
  RegisterChooseProfileScreen,
  RegisterScreen,
  LoginScreen,
} from 'app-screens'
import { Screens } from 'app-constants'

export const AuthStack = () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={Screens.LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen name={Screens.REGISTER_SCREEN} component={RegisterScreen} />
      <Stack.Screen
        name={Screens.REGISTER_CHOOSE_PROFILE_SCREEN}
        component={RegisterChooseProfileScreen}
      />
    </Stack.Navigator>
  )
}