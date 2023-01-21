import React from "react";
import { FlatList, View } from "react-native";
import { useQuery } from "react-query";
import api from "../../utils/api";
import Error from "../reusableComponents/Error";
import Skeleton from "../skeleton/Bookings";
import { Booking as BookingType } from "./BookingItem";

import BookingItem from "./BookingItem";
export type Props = {
  count: number;
  rows: BookingType["booking"][];
};

const Booking = () => {
  const {
    isLoading,
    isError,
    data: bookings,
  } = useQuery<Props, Error>("MY_BOOKINGS", api.getBookings);

  if (isLoading) {
    return <Skeleton />;
  }
  if (isError) {
    return <Error title="Something went wrong !" />;
  }

  return (
    <View style={{ backgroundColor: "#fff", minHeight: "100%" }}>
      {bookings?.rows?.length !== 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: "5%" }}
          data={bookings?.rows}
          renderItem={(booking) => <BookingItem booking={booking.item} />}
          keyExtractor={(booking) => booking.id.toString()}
        />
      ) : (
        <Error title="You have not booked any hotel currently" />
      )}
    </View>
  );
};
export default Booking;
