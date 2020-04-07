import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { Routes } from 'app-config/constants'
import { UnauthenticatedStack } from './unauthenticated.routes'
import { AuthenticatedTab } from './authenticated.routes'

export const Router = () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name={Routes.UNAUTHENTICATED}
        component={UnauthenticatedStack}
      />
      <Stack.Screen
        options={{
          gestureEnabled: false,
        }}
        name={Routes.AUTHENTICATED}
        component={AuthenticatedTab}
      />
    </Stack.Navigator>
  )
}
