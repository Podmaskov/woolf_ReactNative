import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";

import wallpaper from "../assets/images/wallpaper.png";
import userlogo from "../assets/images/userlogo.png";

import PostProfileItem from "../components/PostProfileItem";

export default function ProfileScreen() {
  const [userPosts, setUserPosts] = useState([]);

  return (
    <ImageBackground source={wallpaper} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Feather
          name="log-out"
          size={24}
          color={"#BDBDBD"}
          style={{ position: "absolute", top: 22, right: 16 }}
          onPress={() => {}}
        />
        <View style={styles.avatarWrap}>
          <Image source={userlogo} style={styles.avatar} alt="User photo" />
          <TouchableOpacity style={styles.btnAdd}>
            <AntDesign name="pluscircleo" size={25} color={"#FF6C00"} />
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>{"name"}</Text>

        {userPosts.length !== 0 ? (
          <FlatList
            data={userPosts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <PostProfileItem
                id={item.id}
                title={item.title}
                photoLocation={item.photoLocation}
                url={item.photo}
                geoLocation={item.geoLocation}
              />
            )}
          />
        ) : (
          <View style={{ flex: 1, marginTop: 30, paddingHorizontal: 16 }}>
            <Text style={styles.text}>Ще немає публікацій</Text>
          </View>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  container: {
    position: "relative",
    paddingTop: 92,
    paddingBottom: 115,
    paddingHorizontal: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
    marginTop: 147,
    minHeight: Dimensions.get("window").height - 147,
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
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  cameraBtnPos: {
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  cameraBtn: {
    width: 35,
    height: 35,
    backgroundColor: "#FFFFFF",
    opacity: 0.8,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
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
  title: {
    fontFamily: "Roboto-Medium",
    color: "#212121",
    fontSize: 30,
    textAlign: "center",
  },
  text: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    textAlign: "center",
  },
});
