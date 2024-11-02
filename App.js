import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { LoginScreen } from "./screens/LoginScreen";
import { Navigation } from "./router/Navigation";
import * as Font from "expo-font";

export default function App() {
  useEffect(() => {
    (async function () {
      try {
        await Font.loadAsync({
          "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
          "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
          "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
        });
      } catch (error) {
        console.warn("Font Error:", error);
      }
    })();
  }, []);

  return <Navigation />;
}
