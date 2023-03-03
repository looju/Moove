import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import { SearchBar } from "../../Components/App/SearchBar";

export const HomeScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status, granted } =
        await Location.requestForegroundPermissionsAsync();
      if (granted) {
        const userlocation = await Location.getLastKnownPositionAsync({
          maxAge: 20000,
        });
        setLocation(userlocation);
      } else if (status == "denied") {
        setErrorMsg("Permission to access location was denied");
        console.log("permission denied");
        return;
      }
    })();
  }, []);

  return (
    <>
      <MapView
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: location?.coords?.latitude || 6.605874,
          longitude: location?.coords?.longitude || 3.349149,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{ width: "100%", height: "100%" }}
        userLocationUpdateInterval={4000}
        showsBuildings={true}
        showsTraffic={true}
        showsUserLocation={true}
      ></MapView>
    <SearchBar/>
      
    </>
  );
};


