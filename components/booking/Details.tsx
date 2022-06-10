import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Title, Caption } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import EvilIcon from "react-native-vector-icons/EvilIcons";
import DateTimePickerModal from "react-native-modal-datetime-picker";

interface Props {
  showDatePicker: () => void;
  hideDatePicker: () => void;
  reduceNights: () => void;
  increaseNights: () => void;
  handleConfirm: (date: Date) => void;
  isDatePickerVisible: boolean;
  date: string;
  nights: number;
}

const Details = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.sub_container}>
        <Title>Date and Guest</Title>
        <View style={styles.date_container}>
          <EvilIcon name="calendar" size={48} color="#326fa8" />
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 20 }}>Arrival Date</Text>
              <Text>{props.date}</Text>
            </View>
            <TouchableOpacity onPress={props.showDatePicker}>
              <EvilIcon name="chevron-right" size={36} color="#326fa8" />
            </TouchableOpacity>
          </View>
        </View>
        <Caption style={{ fontSize: 16, marginTop: "5%" }}>
          Make sure to check your date before making any sort of payment.
        </Caption>
        <View style={styles.nights_container}>
          <View style={styles.icon_container}>
            <Icon name="nights-stay" size={36} color="#326fa8" />
          </View>
          <View style={styles.nights_sub_container}>
            <View style={styles.nights_title}>
              <Title>Nights</Title>
              <Text style={{ fontSize: 16 }}>{props.nights}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                disabled={props.nights === 1}
                onPress={props.reduceNights}
              >
                <EvilIcon name="minus" size={40} color="#326fa8" />
              </TouchableOpacity>
              <Title>{props.nights}</Title>
              <TouchableOpacity onPress={props.increaseNights}>
                <EvilIcon name="plus" size={40} color="#326fa8" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <DateTimePickerModal
        isVisible={props.isDatePickerVisible}
        mode="date"
        onConfirm={props.handleConfirm}
        onCancel={props.hideDatePicker}
      />
    </View>
  );
};
export default Details;

const styles = StyleSheet.create({
  container: {
    marginTop: "3%",
    backgroundColor: "#fff",
    paddingVertical: "2%",
  },
  sub_container: { width: "80%", alignSelf: "center" },
  nights_title: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
  },
  nights_sub_container: { flexDirection: "row", alignItems: "center" },
  date_container: {
    flexDirection: "row",
    height: 50,
    width: "80%",
    alignItems: "center",
  },
  icon_container: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#326fa8",
    justifyContent: "center",
    alignItems: "center",
  },
  nights_container: {
    marginTop: "10%",
    flexDirection: "row",
    width: "100%",
    paddingVertical: "5%",
  },
});
