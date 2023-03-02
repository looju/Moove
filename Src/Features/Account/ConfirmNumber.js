import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import Animated, {
  FadeIn,
  BounceInDown,
  BounceOutUp,
  SlideOutLeft,
  SlideInRight,
  SlideOutDown,
  SlideInDown,
  StretchInY,
  StretchInX,
  Layout,
} from "react-native-reanimated";
import { PhoneAuthProvider, signInWithCredential } from "firebase/auth";
import { auth } from "../../Services/Config/Config";
import { UserData } from "../../Services/UserData";
import { Button } from "react-native-paper";

export const ConfirmNumber = ({ navigation }) => {
  const CELL_COUNT = 6;
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const { setUserTel, userTel, setUserData, verificationId } =
    useContext(UserData);
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const confirmCode = async (code) => {
    const credential = PhoneAuthProvider.credential(verificationId, code);
    const userCredential = await signInWithCredential(auth, credential);
    setUserData(userCredential);
    try {
      const jsonValue = JSON.stringify(userTel); //save phone number once verification code has been confirmed
      await AsyncStorage.setItem("userPhoneNum", jsonValue);
    } catch (e) {
      console.log("problem storing user's phone number " + e);
    }
    navigation.navigate("UserName");
  };

  return (
    <View style={Styles.container}>
      <Animated.View
        style={Styles.headerView}
        entering={BounceInDown.duration(2500)}
        exiting={BounceOutUp.duration(2000)}
        layout={Layout.springify()}
      >
        <Text style={Styles.text}>A code has been sent to </Text>
        <Text style={Styles.userTel}> +234{userTel} </Text>
      </Animated.View>
      <Animated.View
        style={Styles.inputContainer}
        entering={StretchInY.duration(2500)
          .stiffness(300)
          .mass(2.5)
          .springify()}
        exiting={StretchInX.duration(2500).stiffness(300).mass(2.5).springify()}
        layout={Layout.springify()}
      >
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={(text) => setValue(text)}
          cellCount={CELL_COUNT}
          rootStyle={Styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="Enter the confirmation code"
          renderCell={({ index, symbol, isFocused }) => (
            <Text
              key={index}
              style={[Styles.cell, isFocused && Styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}
            >
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
      </Animated.View>

      {errorMessage && (
        <Animated.View
          style={Styles.errorView}
          entering={FadeIn.duration(2500)}
        >
          <Text style={Styles.errorText}>Incomplete verification code. </Text>
        </Animated.View>
      )}

      <Animated.View
        style={Styles.textView}
        entering={SlideInRight.duration(2500)}
        exiting={SlideOutLeft.duration(2500)}
        layout={Layout.springify()}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={Styles.privacyText}>Change phone number</Text>
        </TouchableOpacity>
      </Animated.View>

      <Animated.View
        style={Styles.buttonView}
        entering={SlideInDown.duration(2500)}
        exiting={SlideOutDown.duration(2500)}
        layout={Layout.springify()}
      >
        <Button
          icon="step-forward-2"
          mode="contained"
          dark={true}
          buttonColor="#000080"
          style={{ width: "60%", left: "20%" }}
          onPress={() =>
            value.length == 6 ? confirmCode(value) : setErrorMessage(true)
          }
        >
          Confirm my number
        </Button>
      </Animated.View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#152238",
  },
  headerView: {
    marginTop: 35,
    marginLeft: 15,
  },
  textView: {
    marginTop: 25,
    marginLeft: 15,
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
  userTel: {
    fontWeight: "bold",
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
  cell: {
    width: 40,
    height: 70,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: "#fff",
    textAlign: "center",
    backgroundColor: "	#36454F",
    borderRadius: 10,
    marginHorizontal: 10,
    color: "#fff",
  },
  focusCell: {
    borderColor: "#000",
  },
  codeFieldRoot: {
    marginTop: 20,
  },
  errorView: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  errorText: {
    color: "#ff0000",
  },
});
