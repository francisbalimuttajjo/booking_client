import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { HotelDetailsNavigationProps, Hotel } from "../../types/apiTypes";

const Footer = (props: { hotel?: Hotel }) => {
  const { navigate } = useNavigation<HotelDetailsNavigationProps>();

  return (
    <View style={styles.container}>
      <View style={styles.price_container}>
        <Text style={styles.price}> &#36;&nbsp;{props.hotel?.price}</Text>
      </View>

      <TouchableOpacity
        onPress={() => navigate("Booking", { hotel: props.hotel })}
        activeOpacity={0.7}
        style={styles.btn}
      >
        <Text style={styles.text}>BOOK NOW</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Footer;
const styles = StyleSheet.create({
  container: {
    bottom: 0,
    position: "absolute",
    backgroundColor: "#fff",
    width: "100%",
    justifyContent: "space-around",
    flexDirection: "row",
    paddingVertical: 15,
  },
  price_container: {
    width: "40%",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  price: {
    color: "#326fa8",
    fontWeight: "bold",
    fontSize: 24,
    alignItems: "center",
  },
  btn: {
    width: "40%",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    backgroundColor: "#326fa8",
  },
});
