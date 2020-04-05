import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen, ProfileScreen } from "../screens/";

export const HomeTabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
