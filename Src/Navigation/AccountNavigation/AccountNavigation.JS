import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Number } from "../../Features/Account/Number";
import { ConfirmNumber } from "../../Features/Account/ConfirmNumber";
import { UserName } from "../../Features/Account/UserName";

const Stack = createStackNavigator();
export const AccountNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Number"
        component={Number}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ConfirmNumber"
        component={ConfirmNumber}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserName"
        component={UserName}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
