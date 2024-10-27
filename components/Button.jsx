import React from "react";
import { TouchableOpacity } from "react-native";

export const Button = ({ children, ...TouchableOpacityProps }) => {
  return (
    <TouchableOpacity {...TouchableOpacityProps}>{children}</TouchableOpacity>
  );
};
