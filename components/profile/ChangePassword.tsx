import React from "react";
import { Title } from "react-native-paper";
import Icon from "react-native-vector-icons/EvilIcons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationProps } from "../../types/apiTypes";

const Form = () => {
  const { navigate } = useNavigation<NavigationProps>();

  return (
    <View style={styles.container}>
      <View style={styles.sub_container}>
        <Title> Private Information</Title>
        <View style={styles.password_container}>
          <Icon name="lock" size={30} color="black" />

          <Text>Change Password</Text>
          <TouchableOpacity
            onPress={() => navigate("ChangePassword")}
            style={styles.btn}
          >
            <Icon name="chevron-right" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: "5%",
    height: 150,
  },
  password_container: {
    marginTop: "2%",
    flexDirection: "row",
    alignItems: "center",
  },
  sub_container: { width: "80%", alignSelf: "center" },
  btn: { right: 0, position: "absolute" },
});
