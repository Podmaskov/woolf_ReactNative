import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function PostItem({
  id,
  title,
  photoLocation,
  url,
  geoLocation,
}) {
  const navigation = useNavigation();

  const [allComments, setAllComments] = useState([]);
  const [allLikes, setAllLikes] = useState([]);
  const [userPutLike, setUserPutLike] = useState(false);

  return (
    <View style={styles.postContainer}>
      <View style={styles.postPhotoWrap}>
        <Image source={{ uri: url }} style={styles.postPhoto} alt={title} />
      </View>
      <Text style={styles.postTitle}>{title}</Text>
      <View style={styles.postDetails}>
        <TouchableOpacity
          style={styles.postComments}
          onPress={() => navigation.navigate("Comments", { url, id })}
        >
          <Feather name="message-circle" size={24} style={styles.postIcon} />
          <Text style={styles.commentText}>{allComments.length}</Text>
        </TouchableOpacity>
        <View style={{ ...styles.postComments, marginLeft: 24 }}>
          <Feather
            name="thumbs-up"
            size={24}
            color={!userPutLike ? "#BDBDBD" : "#FF6C00"}
            onPress={handleLikes}
          />
          <Text style={styles.commentText}>{allLikes.length}</Text>
        </View>
        <TouchableOpacity
          style={styles.postLocation}
          onPress={() =>
            navigation.navigate("Map", { geoLocation, photoLocation })
          }
        >
          <Feather name="map-pin" size={24} style={styles.locationIcon} />
          <Text style={styles.locationText}>{photoLocation}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    marginBottom: 15,
  },
  postPhotoWrap: {
    width: "100%",
    height: 240,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
  },
  postPhoto: {
    width: "100%",
    height: 240,
    borderRadius: 8,
  },
  postTitle: {
    marginTop: 8,
    fontFamily: "Roboto-Medium",
    color: "#212121",
    fontSize: 16,
  },
  postDetails: {
    display: "flex",
    flexDirection: "row",
    marginTop: 8,
    justifyContent: "space-between",
  },
  postComments: {
    display: "flex",
    flexDirection: "row",
    gap: 6,
  },
  postLocation: {
    marginLeft: "auto",
    display: "flex",
    flexDirection: "row",
    gap: 4,
  },
  commentText: {
    fontFamily: "Roboto-Regular",
    color: "#BDBDBD",
    fontSize: 16,
  },
  locationText: {
    fontFamily: "Roboto-Regular",
    color: "#212121",
    fontSize: 16,
    textDecorationLine: "underline",
  },
  postIcon: {
    color: "#FF6C00",
  },
  locationIcon: {
    color: "#BDBDBD",
  },
});
