import React from "react";
import EvilIcon from "react-native-vector-icons/EvilIcons";
import { Image, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Hotel as HotelType } from "../../types/apiTypes";
import useFns from "./useFns";

const PopularHotel = (props: { hotel: HotelType }) => {
  const { handleNavigation } = useFns();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={handleNavigation}
      style={styles.container}
    >
      <View style={styles.sub_container}>
        <Image
          style={styles.image}
          source={{
            uri: props.hotel.mainImage,
          }}
        />
        <View style={styles.details_container}>
          <View style={{ height: "50%" }}>
            <Text style={styles.name}>{props.hotel.name}</Text>
            <View style={styles.location_container}>
              <EvilIcon name="location" size={24} color="#326fa8" />
              <Text style={{ opacity: 0.5 }}>
                {props.hotel.physicalLocation}, Uganda
              </Text>
            </View>
          </View>

          <View style={styles.price_container}>
            <Text style={styles.price}>{props.hotel.price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default PopularHotel;

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 250,
    marginRight: 10,
    shadowColor: "rgba(0,0,0, .4)",
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    backgroundColor: "#fff",
    elevation: 6,
    borderRadius: 12,
  },
  sub_container: {
    width: "95%",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 5,
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 90,
    borderRadius: 15,
  },
  details_container: { width: "60%", marginLeft: "2%", marginTop: "10%" },
  location_container: { flexDirection: "row", marginTop: "2%" },
  price_container: {
    height: "50%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    right: 0,
  },
  price: {
    fontSize: 16,
    color: "#326fa8",
    right: 10,
    position: "absolute",
    marginTop: 30,
  },
  name: {
    fontWeight: "bold",
    textTransform: "capitalize",
    fontSize: 14,
    color: "#326fa8",
  },
});
