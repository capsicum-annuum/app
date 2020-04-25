import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { Screens } from 'app-constants'
import { BottomTab } from './bottom.tab'

export const MainStack = () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={Screens.BOTTOM_TAB} component={BottomTab} />
    </Stack.Navigator>
  )
}
