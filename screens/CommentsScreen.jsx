import { StyleSheet, View, FlatList, TextInput } from "react-native";
import Comment from "../components/Comment";
import AntDesign from "@expo/vector-icons/AntDesign";
import Buttons from "../components/Buttons";
import { Colors } from "../styles/global";
import commentAvatarUrl1 from "../assets/images/avatar1.png";
import commentAvatarUrl2 from "../assets/images/avatar2.png";

const COMMENTS = [
  {
    id: 1,
    userAvatar: commentAvatarUrl1,
    textComment:
      "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
    dateComment: "09 червня, 2020 | 08:40",
  },
  {
    id: 2,
    userAvatar: commentAvatarUrl2,
    textComment:
      "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
    dateComment: "09 червня, 2020 | 09:14",
  },
  {
    id: 3,
    userAvatar: commentAvatarUrl1,
    textComment: "Thank you! That was very helpful!",
    dateComment: "09 червня, 2020 | 09:20",
  },
];

const CommentsScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.containerImg}></View>
        <FlatList
          data={COMMENTS}
          renderItem={({ item, index }) => (
            <Comment
              textComment={item.textComment}
              dateComment={item.dateComment}
              userAvatar={item.userAvatar}
              isEven={index % 2 === 1}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholderTextColor={Colors.text_gray}
          placeholder="Коментувати..."
        />
        <View style={styles.buttonWrapper}>
          <Buttons
            buttonSize="small"
            isButtonActive={true}
            onPress={() => console.log("Pressed")}
          >
            <AntDesign name="arrowup" size={24} color={Colors.whites} />
          </Buttons>
        </View>
      </View>
    </View>
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  containerImg: {
    width: "100%",
    height: 240,
    backgroundColor: Colors.light_gray,
    borderRadius: 8,
    marginBottom: 32,
  },
  inputWrapper: {
    position: "relative",
    justifyContent: "center",
    marginBottom: 16,
  },
  input: {
    height: 50,
    borderColor: Colors.border_gray,
    borderWidth: 1,
    borderRadius: 25,
    paddingLeft: 15,
    paddingRight: 60,
    backgroundColor: Colors.light_gray,
  },
  buttonWrapper: {
    position: "absolute",
    right: 10,
    top: 8,
  },
});
