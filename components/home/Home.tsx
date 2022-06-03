import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { useQuery, useQueryClient } from "react-query";
import api from "../../utils/api";
import { Hotel as HotelType } from "../../types/apiTypes";
import UserContext from "../../utils/fns/userContext";
import Header from "./Header";
import Hotel from "./Hotel";
import Greeting from "./Greeting";

const Home = () => {
  const queryClient = useQueryClient();

  const {
    // isFetching,
    isLoading: loadingHotel,
    // isError,
    data: hotels,
    // error,
  } = useQuery<HotelType[], Error>("HOTELS", api.getHotels);
  const {
    // isFetching,
    // isLoading: TopHotels,
    // isError,
    data: topHotels,
    // error,
  } = useQuery<HotelType[], Error>("TOP_RATED_HOTELS", api.getTopRatedHotels);
  // console.log(hotels);

  const { initialState } = useContext(UserContext);

  if (loadingHotel) {
    return <Text>loading ....</Text>;
  }

  return (
    <View>
      <Header />
      <Greeting />

      <Text style={styles.text}>Recommended Places</Text>
      <FlatList
        horizontal
        contentContainerStyle={{ paddingHorizontal: "5%" }}
        data={hotels}
        renderItem={(hotel) => <Hotel hotel={hotel.item} />}
        keyExtractor={(hotel) => hotel.id.toString()}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "capitalize",
    width: "80%",
    alignSelf: "center",
    marginTop: "10%",
    opacity: 0.4,
    marginBottom: "5%",
  },
});
