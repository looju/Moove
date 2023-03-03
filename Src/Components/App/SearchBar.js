import { View, Text, StyleSheet } from "react-native";
import React from "react";

export const SearchBar = () => {
  return (
    <View style={Styles.searchBarView}>
      <View style={Styles.pickUpView}>
        <Text style={Styles.text}> 🟢 PICK UP 🔵</Text>
      </View>
      <View style={Styles.pickUpSearchBar}>
        <Text> From where?</Text>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  searchBarView: {
    backgroundColor: "rgba(0,0,0,0.6)",
    position: "absolute",
    zIndex: 20,
    bottom: 20,
    height: 100,
    width: 350,
    left: 30,
    borderRadius: 10,
  },
  pickUpView: {
    marginTop: 10,
    left: 10,
  },
  pickUpSearchBar: {
    marginTop: 10,
    left: 20,
  },
  text: {
    color: "#fff",
    fontWeight: "400",
  },
});


