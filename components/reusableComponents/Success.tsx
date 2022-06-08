import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Title } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationProps } from "../../types/apiTypes";

const Success: React.FC<{ message: string; screen: string; title: string }> = (
  props
) => {
  const { navigate } = useNavigation<NavigationProps>();

  return (
    <View style={styles.container}>
      <View style={styles.icon_container}>
        <View style={styles.icon}>
          <Ionicons name="checkmark-circle" size={60} color="#326fa8" />
        </View>
        <Text style={styles.text}>{props.message}</Text>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.btn}
          onPress={() => navigate(props.screen)}
        >
          <Title style={{ color: "#fff" }}>{props.title}</Title>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Success;

const styles = StyleSheet.create({
  icon_container: {
    display: "flex",
    justifyContent: "center",
  },
  btn: {
    width: "100%",
    backgroundColor: "#326fa8",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: "5%",
    marginTop: "10%",
  },
  container: {
    height: "100%",
    justifyContent: "center",
    flexDirection: "row",
    padding: "5%",
  },
  icon: { justifyContent: "center", alignSelf: "center" },
  text: { color: "skyblue" },
});
