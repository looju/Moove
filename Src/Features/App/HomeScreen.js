import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";

export const HomeScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        console.log("permission denied");
        return;
      }
      let userlocation = await Location.getLastKnownPositionAsync({
        maxAge: 20000,
      });
      setLocation(userlocation);
    })();
  }, []);

  return (
    <View style={Styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{ width: "100%", height: "100%" }}
        liteMode
        userLocationUpdateInterval={4000}
        showsBuildings={true}
        showsTraffic={true}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: Dimensions.get("screen").height,
    width: Dimensions.get("screen").width,
  },
  text: {
    color: "#fff",
  },
});
