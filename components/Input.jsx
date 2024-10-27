import React from "react";
import { TextInput, View } from "react-native";

export const Input = ({ rightButton, ...textInputProps }) => {
  return (
    <View>
      <TextInput {...textInputProps} autoCapitalize="none" />

      {rightButton}
    </View>
  );
};
