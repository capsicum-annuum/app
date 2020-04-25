import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { Screens } from 'app-config/constants'
import { AuthStack } from './auth.stack'
import { MainStack } from './main.stack'

export const Router = () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={Screens.AUTH_STACK} component={AuthStack} />
      <Stack.Screen
        options={{
          gestureEnabled: false,
        }}
        name={Screens.MAIN_STACK}
        component={MainStack}
      />
    </Stack.Navigator>
  )
}
