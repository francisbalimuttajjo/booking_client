import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { Title } from "react-native-paper";
import EvilIcon from "react-native-vector-icons/EvilIcons";
import { Hotel } from "../../types/apiTypes";

const ImageComponent = (props: { hotel: Hotel }) => {
  return (
    <View style={styles.container}>
      <View style={styles.sub_container}>
        <Image
          style={styles.image}
          source={{
            uri: props.hotel.mainImage,
          }}
        />
        <View style={styles.hotel_container}>
          <Title style={styles.name}>{props.hotel.name}</Title>
          <View style={{ flexDirection: "row" }}>
            <EvilIcon name="location" size={24} color="#326fa8" />
            <Text>{props.hotel.physicalLocation}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ImageComponent;
const styles = StyleSheet.create({
  container: { backgroundColor: "#fff", height: 150, paddingVertical: "5%" },
  name: { textTransform: "capitalize", fontSize: 16 },
  image: { height: 100, width: 100 },
  hotel_container: {
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  sub_container: {
    width: "80%",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
