import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Caption } from "react-native-paper";

const Item = (props: { title: string; amount: number }) => {
  return (
    <View style={styles.container}>
      <View style={styles.sub_container}>
        <Caption style={{ fontSize: 20, flex: 1 }}>{props.title}</Caption>
        <Text style={{ fontSize: 20 }}> &#36;&nbsp;{props.amount}</Text>
      </View>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: { width: "80%", alignSelf: "center" },
  sub_container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
