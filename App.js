import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  useFonts,
  Oswald_400Regular,
  Lato_400Regular,
  Anton_400Regular,
  Griffy_400Regular,
  Tangerine_400Regular,
  Arizonia_400Regular,
  BebasNeue_400Regular,
} from "@expo-google-fonts/dev";
import { NavigationBridge } from "./Src/Navigation/NavigationBridge/NavigationBridge";
import { UserDataProvider } from "./Src/Services/UserData";

export default function App() {
  const [fontsLoaded] = useFonts({
    Oswald_400Regular,
    Anton_400Regular,
    BebasNeue_400Regular,
    Tangerine_400Regular,
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <NavigationContainer>
        <UserDataProvider>
          <NavigationBridge />
        </UserDataProvider>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
