import React from "react";
import { Text } from "react-native";
import { Hotel } from "../../types/apiTypes";

const Details = (props: { hotel: Hotel }) => {
  return (
    <>
      <Text>Details page</Text>
      <Text>{props.hotel.id}</Text>
    </>
  );
};

export default Details;
