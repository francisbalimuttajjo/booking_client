import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Caption, Title } from "react-native-paper";
import { useQueryClient } from "react-query";
import { Hotel } from "../../types/apiTypes";
import api from "../../utils/api";
import { getDate } from "../../utils/fns/others";

export type Booking = {
  booking: {
    completed: boolean;
    id: number;
    nights: number;
    checkin_date: string;
    cash_paid: number;
    hotel: Hotel;
    user: string;
  };
};

const Booking = (props: Booking) => {
  const { date } = getDate(props.booking.checkin_date);
  const [loading, setLoading] = React.useState<boolean>(false);
  const queryClient = useQueryClient();

  const cancelBooking = () => {
    setLoading(true);

    api
      .cancelBooking(props.booking.id)
      .then(() => {
        setLoading(false);
        queryClient.invalidateQueries("MY_BOOKINGS");
      })
      .catch(() => {
        setLoading(false);
      });
  };
  return (
    <View style={styles.main_container}>
      <View style={styles.sub_container}>
        <View style={styles.item_container}>
          <View style={{ width: "80%" }}>
            <Title style={styles.title}>{props.booking.hotel.name}</Title>
            <View style={styles.nights_container}>
              <Title style={{ opacity: 0.6 }}>Nights:</Title>
              <Caption style={styles.caption}>{props.booking.nights}</Caption>
            </View>
          </View>

          <View style={styles.price_container}>
            <Title style={{ color: "#fff" }}> &#36;&nbsp;</Title>
            <Text style={styles.total}>{props.booking.cash_paid}</Text>
          </View>
        </View>
        <View style={styles.date_container}>
          <View style={{ width: "60%" }}>
            <Text>Arrival Date:&nbsp;{date}</Text>
          </View>
          <View style={styles.btn_container}>
            <TouchableOpacity disabled={loading} onPress={cancelBooking}>
              <Text>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Booking;

const styles = StyleSheet.create({
  main_container: {
    backgroundColor: "#fff",
    height: 120,
    paddingTop: 10,
    borderColor: "#e0e1e2",
    borderBottomWidth: 0.5,
    paddingHorizontal: "5%",
  },
  price_container: {
    minWidth: "20%",
    alignItems: "center",
    backgroundColor: "#326fa8",
    justifyContent: "center",
    borderRadius: 20,
    height: "50%",
    flexDirection: "row",
    paddingHorizontal: "5%",
  },
  btn_container: {
    flexDirection: "row",
    width: "40%",
    justifyContent: "space-around",
  },
  nights_container: {
    flexDirection: "row",
    alignItems: "center",
  },
  caption: { fontSize: 18, marginTop: 7, marginLeft: 10 },
  title: { opacity: 0.7, textTransform: "capitalize" },
  sub_container: { width: "90%", alignSelf: "center" },
  date_container: { height: "25%", flexDirection: "row" },
  item_container: { flexDirection: "row", height: "75%" },
  total: { color: "#fff", fontWeight: "bold" },
});
