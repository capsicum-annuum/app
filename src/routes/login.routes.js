import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { LoginScreen, RegisterScreen } from "../screens";

export const LoginRoutes = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  );
};
