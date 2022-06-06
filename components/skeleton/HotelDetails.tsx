import React from "react";
import { View } from "react-native";
import Skeleton from "./Skeleton";

const HotelDetails = () => {
  return (
    <View style={{ paddingHorizontal: "5%" }}>
      <Skeleton height={200} width="100%" margin="5%" />
      <Skeleton height={200} width="100%" margin={10} borderRadius={15} />
      <Skeleton height={20} width="100%" margin={10} />
      <Skeleton height={20} width="100%" margin={10} />
      <Skeleton height={20} width="100%" margin={10} />
      <Skeleton height={50} width="100%" margin={40} />
    </View>
  );
};

export default HotelDetails;
