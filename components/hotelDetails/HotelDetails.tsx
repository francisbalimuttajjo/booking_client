import React from "react";
import { useQuery } from "react-query";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import Reviews from "./ReviewList";
import Services from "./Services";
import ReadMore from "./ReadMore";
import api from "../../utils/api";
import LocationDetails from "./LocationDetails";
import { Hotel, HotelDetailsResponse } from "../../types/apiTypes";

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
    <ScrollView style={{ height: "100%" }}>
      <LocationDetails
        hotel={data?.data?.hotel}
        averageRating={data?.data?.averageRating}
        noOfRatings={data?.data?.noOfRatings}
      />
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: data?.data?.hotel.mainImage,
          }}
        />
      </View>
      <ReadMore description={data?.data?.hotel.description} />
      <Services />
      <Reviews reviews={data?.data?.hotel.reviews} />

      {/* <Text>Details page</Text>
      <Text>{props.hotel.id}</Text> */}
    </ScrollView>
  );
};

export default Details;
const styles = StyleSheet.create({
  container: { backgroundColor: "#fff", marginTop: "2%", paddingTop: "2%" },
  image: {
    width: "95%",
    height: 200,
    borderRadius: 5,
    alignSelf: "center",
  },
});
