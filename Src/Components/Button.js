import { Button } from "react-native-paper";
import React from "react";

export const ButtonComponent = ({ text, iconValue }) => {
  return (
    <Button
      icon={`${iconValue}`}
      mode="contained"
      dark={true}
      buttonColor="#000080"
      style={{ width: "60%", left: "20%" }}
    >
      {text}
    </Button>
  );
};
