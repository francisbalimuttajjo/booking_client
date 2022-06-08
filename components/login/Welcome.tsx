import React from "react";
import { StyleSheet, View } from "react-native";
import { Caption, Title } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.icon_container}>
        <Icon name="hotel" size={100} color="#326fa8" />
      </View>
      <View style={styles.sub_container}>
        <Title style={styles.text_1}>Welcome To Booking</Title>
        <Caption style={styles.text_2}>Plan Ahead of Time</Caption>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 300,
    alignSelf: "center",
    justifyContent: "center",
  },
  icon_container: {
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    height: "34%",

  },
  sub_container: { alignSelf: "center", marginTop: 10 },
  text_1: { alignSelf: "center", fontSize: 24, marginTop: 10 },
  text_2: { alignSelf: "center", fontSize: 18 },
});
