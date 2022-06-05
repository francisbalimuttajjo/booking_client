import React from "react";
import {  Text, FlatList } from "react-native";
import { useQuery } from "react-query";
import api from "../../utils/api";
import PopularHotel from "./PopularHotel";
import { Hotel as HotelType } from "../../types/apiTypes";

const PopularHotelsList = () => {
  const {
    // isFetching,
    isLoading,
    isError,
    data: topHotels,
    // error,
  } = useQuery<HotelType[], Error>("TOP_RATED_HOTELS", api.getTopRatedHotels);



  if (isLoading) {
    return <Text>loading ...</Text>;
  }
  if (isError) {
    return <Text>somehing went wrong</Text>;
  }
  return (
    <FlatList
      horizontal
      contentContainerStyle={{ paddingHorizontal: "5%", paddingBottom: "5%" }}
      data={topHotels}
      renderItem={(hotel) => <PopularHotel hotel={hotel.item} />}
      keyExtractor={(hotel) => hotel.id.toString()}
    />
  );
};

export default PopularHotelsList;
