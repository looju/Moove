import { View, Text, StyleSheet } from "react-native";
import React from "react";
import MapView from "react-native-maps";

export const HomeScreen = () => {
  return (
    <View style={Styles.container}>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={Styles.container}
      />
      <Text style={Styles.text}>HomeScreen</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  text: {
    color: "#fff",
  },
});
