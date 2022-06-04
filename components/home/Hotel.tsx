import React from "react";
import EvilIcon from "react-native-vector-icons/EvilIcons";
import { Image, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Hotel as HotelType } from "../../types/apiTypes";
import useFns from "./useFns";

const Hotel = (props: { hotel: HotelType }) => {
  const { handleNavigation } = useFns(props.hotel);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={handleNavigation}
      style={styles.container}
    >
      <Image
        style={styles.image}
        source={{
          uri: props.hotel.mainImage,
        }}
      />
      <View style={styles.sub_container}>
        <Text style={styles.name}>{props.hotel.name}</Text>
        <View style={styles.location_container}>
          <EvilIcon name="location" size={24} color="#326fa8" />
          <Text style={{ opacity: 0.5 }}>
            {props.hotel.physicalLocation} ,Uganda
          </Text>
          <View style={styles.price_container}>
            <Text style={{ fontSize: 20, color: "#326fa8" }}>
              {props.hotel.price}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default Hotel;

const styles = StyleSheet.create({
  container: {
    height: 260,
    width: 250,
    marginRight: 10,
    shadowColor: "rgba(0,0,0, .4)",
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    backgroundColor: "#fff",
    elevation: 6,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  price_container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    right: 0,
    position: "absolute",
  },
  sub_container: { width: "90%", alignSelf: "center", marginTop: "3%" },
  location_container: { flexDirection: "row", alignItems: "center" },
  image: {
    width: 250,
    height: 200,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  name: {
    fontWeight: "bold",
    textTransform: "capitalize",
    fontSize: 18,
    color: "#326fa8",
  },
});
