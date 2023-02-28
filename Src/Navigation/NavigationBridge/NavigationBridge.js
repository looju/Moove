import { View, Text } from "react-native";
import React,{useContext} from "react";
import { AppNavigation } from "../AppNavigation/AppNavigation";
import { AccountNavigation } from "../AccountNavigation/AccountNavigation";

export const NavigationBridge = () => {
  let user = false;
  return user ? <AppNavigation /> : <AccountNavigation />
};
