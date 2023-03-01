import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity } from "react-native";
import { ButtonComponent } from "../../Components/Button";
import React, { useContext, useState } from "react";
import { UserData } from "../../Services/UserData";
import { Button } from "react-native-paper";

export const ConfirmNumber = ({navigation}) => {


  const { setUserTel, userTel } = useContext(UserData);

  return (
    <View style={Styles.container}>
      <View style={Styles.textView}>
        <Text style={Styles.text}>A code has been sent to </Text>
        <Text style={Styles.text}>{userTel} </Text>
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
            onChangeText={(text) => StoreData(text)}
            style={{ color: "#fff" }}
          />
        </View>
      </View>
      <TouchableOpacity style={Styles.textView} onPress={()=>navigation.goBack()}>
        <Text style={Styles.privacyText}>
         Change phone number
        </Text>
       
      </TouchableOpacity >
      <View style={Styles.buttonView}>
        <Button
          icon="step-forward-2"
          mode="contained"
          dark={true}
          buttonColor="#000080"
          style={{ width: "60%", left: "20%" }}
          onPress={()=>navigation.navigate("ConfirmNumber")}
        >
        Next
        </Button>
      </View>
    </View>
  )
}


const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0,0.87)",
  },
  textView: {
    marginTop: 25,
    marginLeft: 15,
    alignItems:"center"
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