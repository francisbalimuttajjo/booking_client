import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useQuery } from "react-query";
import api from "../../utils/api";
import PopularHotel from "./PopularHotel";
import Skeleton from "../skeleton/Skeleton";
import { Hotel as HotelType } from "../../types/apiTypes";

const PopularHotelsList = () => {
  const { isLoading, data: topHotels } = useQuery<HotelType[], Error>(
    "TOP_RATED_HOTELS",
    api.getTopRatedHotels
  );

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Skeleton height={120} width="70%" borderRadius={15} margin={-10} />
        <Skeleton
          height={120}
          width="25%"
          borderTopLeftRadius={15}
          borderBottomLeftRadius={15}
          margin={-10}
        />
      </View>
    );
  }

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
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
