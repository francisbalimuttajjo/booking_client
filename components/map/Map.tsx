import React from "react";
import { ScrollView, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Title } from "react-native-paper";
import { Hotel } from "../../types/apiTypes";
import OtherThings from "./OtherThings";
import Map from "./MapComponent";
import Footer from "../hotelDetails/Footer";

const MapPage = (props: { hotel: Hotel }) => {
  return (
    <View style={{ height: "100%" }}>
      <ScrollView style={{}}>
        <Map hotel={props.hotel} />
        <OtherThings />
      </ScrollView>
      <Footer hotel={props.hotel} />
    </View>
  );
};

export default MapPage;

// const regionFrom = (lat, lon, distance) => {
//     distance = distance / 2;
//     const circumference = 40075;
//     const oneDegreeOfLatitudeInMeters = 111.32 * 1000;
//     const angularDistance = distance / circumference;

//     const latitudeDelta = distance / oneDegreeOfLatitudeInMeters;
//     const longitudeDelta = Math.abs(
//       Math.atan2(
//         Math.sin(angularDistance) * Math.cos(lat),
//         Math.cos(angularDistance) - Math.sin(lat) * Math.sin(lat)
//       )
//     );

//     return (result = {
//       latitude: lat,
//       longitude: lon,
//       latitudeDelta,
//       longitudeDelta,
//     });
//   };
