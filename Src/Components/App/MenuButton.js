import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


export const MenuButton = () => {
  return (
    <TouchableOpacity style={Styles.menuButton}>
        <MaterialCommunityIcons name="menu" size={25} color="#fff" />
      </TouchableOpacity>
  )
}


const Styles=StyleSheet.create({
    menuButton: {
        backgroundColor: "#000080",
        width: 30,
        height: 30,
        borderRadius:15,
        top: 30,
        left:10,
        position: "absolute",
        zIndex: 20,
        alignItems: "center",
        justifyContent: "center",
      },
})
