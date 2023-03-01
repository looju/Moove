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
import React, { useContext, useState } from "react";
import { UserData } from "../../Services/UserData";
import { Button } from "react-native-paper";

export const Number = ({ navigation }) => {
  const { setUserTel, userTel } = useContext(UserData);

  return (
    <View style={Styles.container}>
      <View style={Styles.textView}>
        <Text style={Styles.text}>Enter your phone number</Text>
      </View>
      <View style={Styles.inputContainer}>
        <View style={Styles.inputView}>
          <TextInput
            label="Email"
            value={"+234"}
            editable={false}
            underlineColorAndroid="#000080"
            textAlign="center"
            readOnly={true}
            style={{ color: "#fff" }}
          />
        </View>
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
      <View style={Styles.textView}>
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
      </View>
      <View style={Styles.buttonView}>
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
      </View>
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
