import React from "react";
import EvilIcon from "react-native-vector-icons/EvilIcons";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { Hotel as HotelType } from "../../types/apiTypes";
import useFns from "../home/useFns";

const Hotel = (props: { hotel: HotelType }) => {
  const { handleNavigation } = useFns(props.hotel);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={handleNavigation}
      style={styles.container}
    >
      <ImageBackground
        source={{ uri: props.hotel.mainImage }}
        borderRadius={8}
        resizeMode="cover"
        style={styles.image}
      ></ImageBackground>
      <View style={styles.sub_container}>
        <Text style={styles.name}>{props.hotel.name}</Text>
        <View style={styles.location_container}>
          <EvilIcon name="location" size={24} color="#326fa8" />
          <Text style={{ opacity: 0.5 }}>
            {props.hotel.physicalLocation} ,Uganda
          </Text>
          <View style={styles.price_container}>
            <Text style={{ fontSize: 20, color: "#326fa8" }}>
              &#36;&nbsp;{props.hotel.price}
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
    height: 230,
    marginRight: 10,
    shadowColor: "rgba(0,0,0, .4)",
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    backgroundColor: "#fff",
    elevation: 6,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginBottom: "7%",
  },
  price_container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    right: 0,
    position: "absolute",
  },
  sub_container: { width: "90%", alignSelf: "center", marginTop: "5%" },
  location_container: { flexDirection: "row", alignItems: "center" },
  image: { width: "100%", height: 150 },
  name: {
    fontWeight: "bold",
    textTransform: "capitalize",
    fontSize: 18,
    color: "#326fa8",
  },
});
