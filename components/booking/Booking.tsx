import React from "react";
import { ScrollView } from "react-native";
import Details from "./Details";
import Image from "./ImageComponent";
import { Hotel } from "../../types/apiTypes";
import { getDate } from "../../utils/fns/others";

const Booking = (props: { hotel: Hotel }) => {
  const [checkinDate, setCheckinDate] = React.useState<Date>(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] =
    React.useState<boolean>(false);
  const [nights, setNights] = React.useState<number>(1);

  const showDatePicker = () => setDatePickerVisibility(true);

  const hideDatePicker = () => setDatePickerVisibility(false);

  const handleConfirm = (date: Date) => {
    setCheckinDate(date);
  };

  const increaseNights = () => setNights((nights) => nights + 1);
  const reduceNights = () => {
    if (nights === 1) {
      return;
    }
    setNights((nights) => nights - 1);
  };

  const { date } = getDate(checkinDate);

  return (
    <ScrollView>
      <Image hotel={props.hotel} />
      <Details
        showDatePicker={showDatePicker}
        hideDatePicker={hideDatePicker}
        handleConfirm={handleConfirm}
        isDatePickerVisible={isDatePickerVisible}
        date={date}
        nights={nights}
        reduceNights={reduceNights}
        increaseNights={increaseNights}
      />
    </ScrollView>
  );
};

export default Booking;
