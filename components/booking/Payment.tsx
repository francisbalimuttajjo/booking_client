import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Title } from "react-native-paper";
import { Hotel } from "../../types/apiTypes";
import Info from "../reusableComponents/Info";
import Item from "./Item";

type Props = {
  hotel: Hotel;
  nights: number;
  handleSubmit: () => void;
  loading: boolean;
  error: string;
};

const Payment = (props: Props) => {
  const AMOUNT = props.nights * props.hotel.price;

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Payment</Title>
      <Item title="Subtotal" amount={AMOUNT} />
      <Item title="Service fee" amount={5} />
      <Item title="Total Payment" amount={AMOUNT + 5} />
      {props.error !== "" && <Info error={props.error} />}
      <TouchableOpacity
        onPress={props.handleSubmit}
        activeOpacity={0.6}
        style={styles.btn}
        disabled={props.loading}
      >
        <Title style={{ color: "#fff" }}>Confirm</Title>
      </TouchableOpacity>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: "3%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingVertical: "5%",
    paddingHorizontal: "5%",
  },
  btn: {
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#326fa8",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: "5%",
    marginTop: "5%",
    borderRadius: 10,
  },
  title: { width: "80%", alignSelf: "center", marginTop: "5%" },
});
