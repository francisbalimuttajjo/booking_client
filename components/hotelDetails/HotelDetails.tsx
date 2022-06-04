import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useQuery } from "react-query";
import api from "../../utils/api";
import EvilIcon from "react-native-vector-icons/EvilIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { Hotel, HotelDetailsResponse } from "../../types/apiTypes";
import LocationDetails from "./LocationDetails";

const Details = (props: { hotel: Hotel }) => {
  const {
    isFetching,
    isLoading,
    isError,
    data,
    // error,
  } = useQuery<HotelDetailsResponse, Error>(
    ["HOTELS_DETAILS", props.hotel.id],
    () => api.getHotel(props.hotel.id)
  );

  if (isLoading) {
    return <Text>Loading</Text>;
  }
  if (isFetching) {
    return <Text>Loading</Text>;
  }
  if (isError) {
    return <Text>error occurred</Text>;
  }
  return (
    <ScrollView>
      <LocationDetails
        hotel={data?.data?.hotel}
        averageRating={data?.data?.averageRating}
        noOfRatings={data?.data?.noOfRatings}
      />
      <View style={{ backgroundColor: "#fff", marginTop: "2%" }}></View>

      <Text>Details page</Text>
      <Text>{props.hotel.id}</Text>
    </ScrollView>
  );
};

export default Details;
const styles = StyleSheet.create({});
