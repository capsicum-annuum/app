import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { LoginRoutes } from "./login.routes";
import { HomeTabs } from "./home.routes";

export const Routes = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="LoginRoutes" component={LoginRoutes} />
      <Stack.Screen
        name="HomeTabs"
        component={HomeTabs}
        options={{ gestureEnabled: false }}
      />
    </Stack.Navigator>
  );
};
