import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { useRoute } from "./router";

export const Navigation = () => {
  const routing = useRoute();

  return <NavigationContainer>{routing}</NavigationContainer>;
};
