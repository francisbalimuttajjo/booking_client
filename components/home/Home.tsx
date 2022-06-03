import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import { useQuery, useQueryClient } from "react-query";
import api from "../../utils/api";
import { Hotel } from "../../types/apiTypes";
import UserContext from "../../utils/fns/userContext";
import Header from "./Header";

const Home = () => {
  const queryClient = useQueryClient();

  const {
    isFetching,
    isLoading: loadingHotel,
    isError,
    data: hotels,
    error,
  } = useQuery<Hotel[], Error>("hotels", api.getHotels);
  // const ho = queryClient.getQueryData("hotels");
  // // console.log("ho", ho);
  // console.log("ho", isFetching);

  const { initialState } = useContext(UserContext);
  console.log(initialState.user);

  if (loadingHotel) {
    return <Text>loading ....</Text>;
  }

  return (
    <View>
      <Header />
      <View style={{ margin: "20%" }}>
        <Text>user {initialState.user.firstName}</Text>

        {hotels?.map((hotel, index) => (
          <Text key={index}>{hotel.name}</Text>
        ))}
      </View>
    </View>
    // <View style={{ margin: "20%" }}>
    //   <Text>user {initialState.user.firstName}</Text>

    //   {hotels?.map((hotel, index) => (
    //     <Text key={index}>{hotel.name}</Text>
    //   ))}
    // </View>
  );
};

export default Home;
