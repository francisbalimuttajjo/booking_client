import React from "react";
import EvilIcon from "react-native-vector-icons/EvilIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { Hotel as HotelType } from "../../types/apiTypes";

const Hotel = (props: { hotel: HotelType }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => console.log("pressed")}
      style={{
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
      }}
    >
      <Image
        style={{
          width: 250,
          height: 200,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
        source={{
          uri: props.hotel.mainImage,
        }}
      />
      <View style={{ width: "90%", alignSelf: "center", marginTop: "3%" }}>
        <Text
          style={{
            fontWeight: "bold",
            textTransform: "capitalize",
            fontSize: 18,
            color: "#326fa8",
          }}
        >
          {props.hotel.name}
        </Text>
        <View style={{ flexDirection: "row",alignItems:"center" }}>
          <EvilIcon name="location" size={24} color="#326fa8" />
          <Text style={{ opacity: 0.5 }}>Kampala Uganda</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              right: 0,
              position: "absolute",
            }}
          >
            {/* <EntypoIcon name="star" size={20} color="#326fa8" /> */}
                      <Text style={{ fontSize: 20, color: "#326fa8" }}>{ props.hotel.price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default Hotel;
