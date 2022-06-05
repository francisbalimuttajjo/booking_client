import React from "react";
import { Text, FlatList, StyleSheet, View } from "react-native";
import { useQuery } from "react-query";
import api from "../../utils/api";
import PopularHotel from "./PopularHotel";
import Skeleton from "../skeleton/Skeleton";
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
    return (
      <View style={styles.container}>
        <Skeleton height={100} width="45%" borderRadius={15} />
        <Skeleton height={100} width="45%" borderRadius={15} />
      </View>
    );
  }
  if (isError) {
    return <Text>somehing went wrong</Text>;
  }
  return (
    <FlatList
      horizontal
      contentContainerStyle={styles.flatList}
      data={topHotels}
      renderItem={(hotel) => <PopularHotel hotel={hotel.item} />}
      keyExtractor={(hotel) => hotel.id.toString()}
    />
  );
};

export default PopularHotelsList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  flatList: { paddingHorizontal: "5%", paddingBottom: "5%" },
});
