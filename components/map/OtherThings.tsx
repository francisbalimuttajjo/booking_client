import React from "react";
import { View, StyleSheet } from "react-native";
import { Title } from "react-native-paper";
import Item from "./Item";

const data = [
  { title: " Check In  3:pm-10:pm", icon: "clock-time-seven-outline" },
  { title: " Check Out  11:am", icon: "clock-time-five-outline" },
  { title: " No Smoking ", icon: "smoking-off" },
];

const Others = () => {
  return (
    <View style={styles.container}>
      <Title style={{ fontSize: 24 }}>Things To Know</Title>
      <View style={styles.sub_container}>
        <Title style={styles.title}>House Rules</Title>
      </View>
      {data.map((item, index) => (
        <Item item={item} key={index} />
      ))}
    </View>
  );
};

export default Others;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: "5%",
    paddingHorizontal: "5%",
    paddingVertical: "5%",
    marginBottom: "50%",
  },
  sub_container: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    marginTop: "5%",
    alignSelf: "center",
  },
  title: { flex: 1, fontSize: 18 },
});
