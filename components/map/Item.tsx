import React from "react";
import { Text, View, StyleSheet } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

const Item = (props: { item: { title: string; icon: string } }) => {
  return (
    <View style={styles.item_container}>
      <MaterialIcon name={props.item.icon} size={20} color="black" />
      <Text style={styles.text_item}>{props.item.title}</Text>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  item_container: {
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    opacity: 0.7,
    marginVertical: "5%",
  },
  text_item: { marginLeft: "5%", fontSize: 16 },
});
