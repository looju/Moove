import { View, Text } from "react-native";
import React,{useContext} from "react";
import { AppNavigation } from "../AppNavigation/AppNavigation";
import { AccountNavigation } from "../AccountNavigation/AccountNavigation";
import { UserData } from './../../Services/UserData';

export const NavigationBridge = () => {

const {userVerifiedNumber}=useContext(UserData)

  return userVerifiedNumber ? <AppNavigation /> : <AccountNavigation />
};
