import React from "react";
import Ionicon from "react-native-vector-icons/Fontisto";
import Icon from "react-native-vector-icons/Feather";
import { Avatar, Title, Caption } from "react-native-paper";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import UserContext from "../../utils/fns/userContext";

const Image = () => {
  const { initialState } = React.useContext(UserContext);

  const USER_IMAGE = initialState.user.photo;

  return (
    <View style={styles.image_container}>
      <View>
        {USER_IMAGE === "" ? (
          <View style={styles.icon_container}>
            <Icon name="user" size={120} color="black" />
          </View>
        ) : (
          <Avatar.Image size={120} source={{ uri: initialState.user.photo }} />
        )}
        <TouchableOpacity
          activeOpacity={0.7}
          style={[styles.btn, styles.image_btn]}
        >
          <Ionicon name="plus-a" size={15} color="white" />
        </TouchableOpacity>
      </View>

      <Title style={styles.text}>
        {initialState.user.firstName} {initialState.user.lastName}
      </Title>
      <Caption>{initialState.user.email}</Caption>
    </View>
  );
};

export default Image;

const styles = StyleSheet.create({
  image_container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: "35%",
    backgroundColor: "#fff",
  },

  icon_container: {
    backgroundColor: "#e0d8d7",
    height: 140,
    width: 140,
    borderRadius: 70,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  btn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#326fa8",
    justifyContent: "center",
    alignItems: "center",
  },
  image_btn: { right: -15, bottom: 15, position: "absolute" },
  text: { textTransform: "capitalize" },
});
