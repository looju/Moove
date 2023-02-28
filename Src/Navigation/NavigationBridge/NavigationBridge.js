import { View, Text } from "react-native";
import React from "react";
import { AppNavigation } from "../AppNavigation/AppNavigation";
import { AccountNavigation } from "../AccountNavigation/AccountNavigation";

export const NavigationBridge = () => {
  let user = true;
  return user ? <AppNavigation /> : <AccountNavigation />;
};
