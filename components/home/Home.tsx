import { useQuery } from "react-query";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Hotel from "./Hotel";
import Header from "./Header";
import Greeting from "./Greeting";
import api from "../../utils/api";
import Skeleton from "../skeleton/Home";
import Error from "../reusableComponents/Error";
import PopularHotelsList from "./PopularHotelsList";
import { Hotel as HotelType } from "../../types/apiTypes";
import React from "react";

const Home = () => {
  const {
    isLoading,
    isError,
    data: hotels,
  } = useQuery<HotelType[], Error>("HOTELS", api.getHotels);

  if (isLoading) {
    return <Skeleton />;
  }

  if (isError) {
    return <Error title="Something went wrong !" />;
  }

  return (
    <View>
      <Header />
      <Greeting />
      <Text style={{ ...styles.text, marginTop: "5%" }}>
        Recommended Places
      </Text>
      <FlatList
        horizontal
        contentContainerStyle={{ paddingHorizontal: "5%" }}
        data={hotels}
        renderItem={(hotel) => <Hotel hotel={hotel.item} />}
        keyExtractor={(hotel) => hotel.id.toString()}
      />
      <Text style={{ ...styles.text, marginTop: "3%" }}>Popular Places</Text>
      <PopularHotelsList />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "capitalize",
    width: "90%",
    alignSelf: "center",
    opacity: 0.4,
    marginBottom: "5%",
  },
});
