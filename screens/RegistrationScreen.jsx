import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  StyleSheet,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
  Platform,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import Button from "../components/Button";
import AuthTextLink from "../components/AuthTextLink";

const wallpaper = require("../assets/images/wallpaper.png");
const userlogo = require("../assets/images/userlogo.png");

export const RegistrationScreen = ({ onLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus(false);
    });
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const handleFocus = (key) => {
    setIsFocused(key);
  };

  const handleBlur = () => {
    setIsFocused("");
  };

  const handleRegisterSubmit = () => {
    console.log({ name, email, password });
    onLogin(true);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground source={wallpaper} style={styles.backgroundImage}>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={{ flex: 1, justifyContent: "flex-end" }}
          >
            <View
              style={{ ...styles.form, height: keyboardStatus ? 360 : 550 }}
            >
              <View style={styles.avatarWrap}>
                <Image
                  source={userlogo}
                  style={styles.avatar}
                  alt="User photo"
                />

                <TouchableOpacity style={styles.btnAdd}>
                  <AntDesign
                    name="pluscircleo"
                    size={25}
                    color={"#FF6C00"}
                    onPress={() => {}}
                  />
                </TouchableOpacity>
              </View>

              <Text style={styles.formTitle}>Реєстрація</Text>
              <TextInput
                style={[
                  styles.input,
                  {
                    borderColor:
                      isFocused === "username" ? "#FF6C00" : "#E8E8E8",
                  },
                ]}
                placeholderTextColor={"#BDBDBD"}
                placeholder="Логін"
                value={name}
                textContentType="username"
                autoCompleteType="off"
                onBlur={handleBlur}
                onFocus={() => handleFocus("username")}
                onChangeText={(value) => setName(value)}
              />

              <TextInput
                style={[
                  styles.input,
                  {
                    borderColor:
                      isFocused === "emailAddress" ? "#FF6C00" : "#E8E8E8",
                  },
                ]}
                placeholderTextColor={"#BDBDBD"}
                placeholder="Адреса електронної пошти"
                value={email}
                textContentType="emailAddress"
                autoCompleteType="off"
                onBlur={handleBlur}
                onFocus={() => handleFocus("emailAddress")}
                onChangeText={(value) => setEmail(value)}
              />

              <View style={(position = "relative")}>
                <TextInput
                  style={[
                    styles.input,
                    { marginBottom: 0 },
                    {
                      borderColor:
                        isFocused === "password" ? "#FF6C00" : "#E8E8E8",
                    },
                  ]}
                  placeholderTextColor={"#BDBDBD"}
                  placeholder="Пароль"
                  value={password}
                  textContentType="password"
                  autoCompleteType="off"
                  secureTextEntry={showPassword}
                  onBlur={handleBlur}
                  onFocus={() => handleFocus("password")}
                  onChangeText={(value) => setPassword(value)}
                />
                {password && (
                  <TouchableOpacity
                    style={styles.btnShowPassword}
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    <Text style={styles.btnShowPasswordText}>
                      {showPassword ? "Показати" : "Приховати"}
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
              <Button
                text="Зареєстуватися"
                onPress={() => handleRegisterSubmit()}
              />
              <AuthTextLink
                text="Вже є акаунт?"
                linkText="Увійти"
                onPress={() => navigation.navigate("Login")}
              />
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    width: "100%",
    height: "100%",
  },
  avatarWrap: {
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -50 }],
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  btnAdd: {
    position: "absolute",
    top: 75,
    right: -12,
    width: 25,
    height: 25,
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
  },
  form: {
    position: "relative",
    paddingTop: 92,
    paddingBottom: 40,
    paddingHorizontal: 16,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    backgroundColor: "#FFFFFF",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  formTitle: {
    fontFamily: "Roboto-Medium",
    color: "#212121",
    marginBottom: 33,
    fontSize: 30,
    textAlign: "center",
  },
  input: {
    fontFamily: "Roboto-Regular",
    height: 50,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    color: "#212121",
    padding: 16,
    marginBottom: 16,
  },
  btnShowPassword: {
    position: "absolute",
    right: 16,
    top: 14,
  },
  btnShowPasswordText: {
    color: "#1B4371",
  },
});
