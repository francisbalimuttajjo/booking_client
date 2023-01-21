import React from "react";
import { useQuery } from "react-query";
import { StyleSheet, View, ScrollView, Image } from "react-native";
import Footer from "./Footer";
import Reviews from "./ReviewList";
import Services from "./Services";
import ReadMore from "./ReadMore";
import api from "../../utils/api";
import Error from "../reusableComponents/Error";
import LocationDetails from "./LocationDetails";
import Skeleton from "../skeleton/HotelDetails";
import { Hotel, HotelDetailsResponse } from "../../types/apiTypes";

const Details = (props: { hotel: Hotel }) => {
  const { isLoading, isError, data } = useQuery<HotelDetailsResponse, Error>(
    ["HOTELS_DETAILS", props.hotel.id],
    () => api.getHotel(props.hotel.id)
  );
    
  if (isLoading) {
    return <Skeleton />;
  }

  if (isError) {
    return <Error title="Something went wrong" />;
  }
  return (
    <View>
      <ScrollView style={{ marginBottom: "30%" }}>
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
        <Services reviews={data?.data?.hotel.reviews} />
        <Reviews reviews={data?.data?.hotel.reviews} />
      </ScrollView>
      <Footer hotel={data?.data?.hotel} />
    </View>
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
