import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Linking,
  TouchableOpacity,
} from "react-native";
import { ButtonComponent } from "../../Components/Button";
import React, { useContext, useState ,useRef} from "react";
import { UserData } from "../../Services/UserData";
import { Button } from "react-native-paper";
import Animated, {
  BounceInDown,
  BounceOutUp,
  FadeIn,
  FadeOut,
  SlideOutDown,
  SlideInRight,
  SlideInDown,
  SlideOutLeft,
  Layout
} from "react-native-reanimated";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import {firebaseConfig} from "../../Services/Config/Config"
import { PhoneAuthProvider, signInWithCredential } from "firebase/auth";
import {auth} from "../../Services/Config/Config"

export const Number = ({ navigation }) => {
  const { setUserTel, userTel,setVerificationId} = useContext(UserData);
  
  const recaptchaVerifier = useRef(null);


  const sendVerification = async (number) => {
    const phoneProvider = new PhoneAuthProvider(auth);
    const verificationId = await phoneProvider.verifyPhoneNumber(
      number,
      recaptchaVerifier.current
    );
    setVerificationId(verificationId);
    navigation.navigate("ConfirmNumber")
  };

  return (
    <View style={Styles.container}>
      <Animated.View
        style={Styles.textView}
        entering={BounceInDown.duration(2500)}
        exiting={BounceOutUp.duration(2000)}
        layout={Layout.springify()}
      >
        <Text style={Styles.text}>Enter your phone number</Text>
      </Animated.View>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
      />
      <View style={Styles.inputContainer}>
        <Animated.View
          style={Styles.inputView}
          entering={FadeIn.duration(2500).springify()}
          exiting={FadeOut.duration(1500)}
          layout={Layout.springify()}
        >
          <TextInput
            label="Email"
            value={"+234"}
            editable={false}
            underlineColorAndroid="#000080"
            textAlign="center"
            readOnly={true}
            style={{ color: "#fff" }}
          />
        </Animated.View>
        <View style={Styles.fullInputView}>
          <TextInput
            label="Email"
            value={userTel}
            underlineColorAndroid="#000080"
            textAlign="center"
            selectionColor="#fff"
            keyboardType="number-pad"
            onChangeText={(text) => setUserTel(text)}
            style={{ color: "#fff" }}
          />
        </View>
      </View>
      <Animated.View
        style={Styles.textView}
        entering={SlideInRight.duration(2500)}
        exiting={SlideOutLeft.duration(2500)}
        layout={Layout.springify()}
      >
        <Text style={Styles.text}>
          By proceeding, you agree to the guidelines and
        </Text>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://loremipsum.io/privacy-policy/")
          }
        >
          <Text style={Styles.privacyText}>Privacy Policy</Text>
        </TouchableOpacity>
      </Animated.View>
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
          onPress={() => navigation.navigate("ConfirmNumber")}
        >
          Accept & continue
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
  text: {
    color: "#fff",
  },
  privacyText: {
    color: "#000080",
    fontSize: 15,
  },
  inputContainer: {
    marginTop: 120,
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
    marginTop: Dimensions.get("screen").height * 0.15,
  },
});
