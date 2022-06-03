import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import { useQuery, useQueryClient } from "react-query";
import api from "../../utils/api";
import { Hotel } from "../../types/apiTypes";
import UserContext from "../../utils/fns/userContext";

const Home = () => {
  const queryClient = useQueryClient();

  const {
    isLoading: loadingHotel,
    isError,
    data: hotels,
    error,
  } = useQuery<Hotel[], Error>("hotels", api.getHotels);

  const { initialState } = useContext(UserContext);
  console.log(initialState.user);

  if (loadingHotel) {
    return <Text>loading ....</Text>;
  }

  return (
    <View style={{ margin: "20%" }}>
      <Text>user {initialState.user.firstName}</Text>

      {hotels?.map((hotel, index) => (
        <Text key={index}>{hotel.name}</Text>
      ))}
    </View>
  );
};

export default Home;
