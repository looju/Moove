import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Linking,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useContext, useState } from "react";
import { Button } from "react-native-paper";
import Animated, {
  RollInLeft,
  BounceOutUp,
  SlideOutDown,
  SlideInDown,
  Layout,
  FadeIn,
} from "react-native-reanimated";
import { UserData } from "../../Services/UserData";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const UserName = () => {
  const { setUserName, userName } = useContext(UserData);
  const [errorMessage, setErrorMessage] = useState(false);

  const SaveUserNameLocally = async (value) => {
    try {
      await AsyncStorage.setItem("userName", value);
    } catch (e) {
      console.log("Error saving username locally" + e);
    }
  };

  return (
    <View style={Styles.container}>
      <Animated.View
        style={Styles.textView}
        entering={RollInLeft.duration(2500).easing().damping(10)}
        exiting={BounceOutUp.duration(2000)}
        layout={Layout.springify()}
      >
        <Text style={Styles.largeText}>Great!</Text>
      </Animated.View>
      <Animated.View
        style={Styles.textView}
        entering={RollInLeft.duration(2500).easing().damping(10)}
        exiting={BounceOutUp.duration(2000)}
        layout={Layout.springify()}
      >
        <Text style={Styles.text}>Enter a username</Text>
      </Animated.View>
      <View style={Styles.inputContainer}>
        <View style={Styles.fullInputView}>
          <TextInput
            label="userName"
            value={userName}
            underlineColorAndroid="#000080"
            textAlign="center"
            selectionColor="#fff"
            keyboardType="default"
            autoComplete="username"
            onChangeText={(text) => setUserName(text)}
            onSubmitEditing={SaveUserNameLocally(userName)}
            onEndEditing={SaveUserNameLocally(userName)}
            style={{ color: "#fff" }}
          />
        </View>
      </View>
      {errorMessage && (
        <Animated.View
          style={Styles.errorView}
          entering={FadeIn.duration(2500)}
        >
          <Text style={Styles.errorText}>You have to enter a username</Text>
        </Animated.View>
      )}
      <Animated.View
        style={Styles.buttonView}
        entering={SlideInDown.duration(2500)}
        exiting={SlideOutDown.duration(2500)}
      >
        <Button
          icon="step-forward-2"
          mode="contained"
          dark={true}
          buttonColor="#000080"
          style={{ width: "60%", left: "20%" }}
          // onPress={() => sendVerification(phoneNumber)}
          onPress={() =>
            userName.length > 0
              ? navigation.navigate("Home")
              : setErrorMessage(true)
          }
        >
          Let's Moove!
        </Button>
      </Animated.View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0,0.87)",
  },
  textView: {
    marginTop: 25,
    marginLeft: 15,
  },
  largeText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
  text: {
    color: "#fff",
  },
  privacyText: {
    color: "#000080",
    fontSize: 15,
  },
  inputContainer: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "center",
  },
  inputView: {
    flex: 0.2,
    marginRight: 10,
  },
  fullInputView: {
    flex: 0.9,
  },
  buttonView: {
    marginTop: Dimensions.get("screen").height * 0.1,
  },
  indicator: {
    marginTop: 80,
  },
  indicatorTextView: {
    alignItems: "center",
    justifyContent: "center",
  },
  indicatorText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "100",
  },
  errorView: {
    alignItems: "center",
    justifyContent: "center",
  },
  errorText: {
    color: "#ff0000",
  },
});
