import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Provider, useDispatch } from "react-redux";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { ActivityIndicator, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { PersistGate } from "redux-persist/integration/react";
import "react-native-gesture-handler";
import StackNavigator from "./router/StackNavigator.jsx";
import store from "./redux/store.jsx";
import { authStateChanged } from "./utils/authListener.js";
import Toast from "react-native-toast-message";

export default function App() {
  const [loaded, error] = useFonts({
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "roboto-medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded || error) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <Provider store={store.store}>
      <PersistGate
        loading={<Text>Loading...</Text>}
        persistor={store.persistor}
      >
        <AuthListener />
      </PersistGate>
    </Provider>
  );
}

const AuthListener = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = authStateChanged(dispatch);
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <StackNavigator />
      <Toast />
    </NavigationContainer>
  );
};
