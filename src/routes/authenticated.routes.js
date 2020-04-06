import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen, ProfileScreen } from 'app-screens'
import { Screens } from 'app-constants'

export const AuthenticatedTab = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name={Screens.HOME} component={HomeScreen} />
      <Tab.Screen name={Screens.PROFILE} component={ProfileScreen} />
    </Tab.Navigator>
  );
};