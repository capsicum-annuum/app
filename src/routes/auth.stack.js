import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import {
  LoginScreen,
  RegisterChooseProfileScreen,
  RegisterScreen,
  RegisterContinueScreen,
  RegisterInfoScreen,
  RegisterFinishScreen,
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
      <Stack.Screen
        name={Screens.REGISTER_CONTINUE_SCREEN}
        component={RegisterContinueScreen}
      />
      <Stack.Screen
        name={Screens.REGISTER_INFO_SCREEN}
        component={RegisterInfoScreen}
      />
      <Stack.Screen
        name={Screens.REGISTER_FINISH_SCREEN}
        component={RegisterFinishScreen}
      />
    </Stack.Navigator>
  )
}