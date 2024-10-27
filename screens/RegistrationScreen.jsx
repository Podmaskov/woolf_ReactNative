import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export const RegistrationScreen = () => {
  return (
    <View>
      <Text>Registration</Text>
      <View>
        <Input placeholder="Login"></Input>
        <Input placeholder="Email"></Input>
        <Input placeholder="Password"></Input>
      </View>
      <View>
        <Button title="Register">
          <Text>Sign up</Text>
        </Button>

        <View>
          <Text>
            Do you have an account?
            <TouchableWithoutFeedback>
              <Text> Log in</Text>
            </TouchableWithoutFeedback>
          </Text>
        </View>
      </View>
    </View>
  );
};
