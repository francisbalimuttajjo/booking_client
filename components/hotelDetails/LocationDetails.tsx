import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import EvilIcon from "react-native-vector-icons/EvilIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { Hotel, HotelDetailsNavigationProps } from "../../types/apiTypes";
import { useNavigation } from "@react-navigation/native";

const Details = (props: {
  hotel?: Hotel;
  averageRating?: number;
  noOfRatings?: number;
}) => {
  const ratings = props.noOfRatings;
  const { navigate } = useNavigation<HotelDetailsNavigationProps>();

  return (
    <View style={styles.main_container}>
      <View style={styles.name_container}>
        <Text style={styles.name}>{props.hotel?.name}</Text>
        <View style={styles.location_container}>
          <EvilIcon name="location" size={24} color="#326fa8" />
          <Text style={{ fontSize: 16 }}>
            {props.hotel?.physicalLocation}, Uganda
          </Text>
        </View>
      </View>
      <View style={styles.sub_container}>
        <View style={[styles.container, styles.rating_container]}>
          <Text style={styles.text}>{props.averageRating}</Text>
          <EntypoIcon name="star" size={20} color="#326fa8" />
        </View>
        <View style={[styles.container, styles.review_container]}>
          <Text style={styles.text}>{props.noOfRatings}</Text>

          <Text>
            {ratings !== undefined
              ? ratings > 1
                ? "Reviews"
                : ratings === 0
                ? "Reviews"
                : "Review"
              : ""}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigate("Map", { hotel: props.hotel })}
          style={styles.pin}
        >
          <EntypoIcon name="pin" size={20} color="#326fa8" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  name_container: {
    width: "90%",
    alignSelf: "center",
    justifyContent: "flex-end",
    height: "70%",
    alignItems: "center",
    opacity: 0.5,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 30,
    borderRadius: 15,
    borderColor: "#326fa8",
    borderWidth: 1,
  },
  sub_container: {
    height: "30%",
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    alignSelf: "center",
  },
  rating_container: { justifyContent: "center", width: 70 },
  review_container: {
    justifyContent: "space-around",
    minWidth: 80,
    marginLeft: 10,
    paddingHorizontal: 10,
  },
  text: { fontSize: 20, color: "#326fa8", fontWeight: "bold" },
  main_container: { backgroundColor: "#fff", width: "100%", height: 200 },
  location_container: { flexDirection: "row", marginTop: "2%" },
  name: { fontSize: 32, textTransform: "capitalize" },
  pin: { right: 10, position: "absolute" },
});
