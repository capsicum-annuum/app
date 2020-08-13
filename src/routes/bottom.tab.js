import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { HomeScreen, ProfileScreen } from 'app-screens'
import { Screens } from 'app-constants'

export const BottomTab = () => {
  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator>
      <Tab.Screen name={Screens.HOME_SCREEN} component={HomeScreen} />
      <Tab.Screen name={Screens.PROFILE_SCREEN} component={ProfileScreen} />
    </Tab.Navigator>
  )
}
