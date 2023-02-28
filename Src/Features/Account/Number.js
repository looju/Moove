import { View, Text, StyleSheet, Dimensions, TextInput } from "react-native";
import { Button } from "react-native-paper";
import React from "react";

export const Number = () => {
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
            underlineColorAndroid="#BF40BF"
            textAlign="center"
            readOnly={true}
            style={{ color: "#fff" }}
          />
        </View>
        <View>
        <TextInput
            label="Email"
            value={"+234"}
            editable={false}
            underlineColorAndroid="#BF40BF"
            textAlign="center"
            readOnly={true}
            style={{ color: "#fff" }}
          />
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0,0.95)",
  },
  textView: {
    marginTop: 25,
  },
  text: {
    color: "#fff",
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
  fullInputView:{
    
  }
});
