import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";

import { RegistrationScreen } from "../screens/RegistrationScreen";
import { LoginScreen } from "../screens/LoginScreen";

import HomeScreen from "../screens/HomeScreen";
import CommentsScreen from "../screens/CommentsScreen";
import MapScreen from "../screens/MapScreen";

const Stack = createStackNavigator();

export const useRoute = () => {
  const [isAuth, setIsAuth] = useState(false);
  if (!isAuth) {
    return (
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: styles.header,
          headerTitleStyle: styles.title,
        }}
      >
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={() => <LoginScreen onLogin={setIsAuth} />}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Registration"
          component={() => <RegistrationScreen onLogin={setIsAuth} />}
        />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: styles.header,
        headerTitleStyle: styles.title,
      }}
    >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{
          title: "Коментарі",
        }}
        name="Comments"
        component={CommentsScreen}
      />
      <Stack.Screen
        options={{
          title: "Мапа",
        }}
        name="Map"
        component={MapScreen}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 500,
    fontSize: 17,
    letterSpacing: -0.4,
    textAlign: "center",
    color: "#212121",
  },
});
