import React from "react";
import { ScrollView } from "react-native";
import Details from "./Details";
import Payment from "./Payment";
import Image from "./ImageComponent";
import useFns from "./useFns";
import { Hotel } from "../../types/apiTypes";

const Booking = (props: { hotel: Hotel }) => {
  const {
    handleSubmit,
    date,
    reduceNights,
    increaseNights,
    handleConfirm,
    hideDatePicker,
    isDatePickerVisible,
    showDatePicker,
    error,
    loading,
    nights,
  } = useFns({ hotel: props.hotel });

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
      <Payment
        hotel={props.hotel}
        nights={nights}
        handleSubmit={handleSubmit}
        loading={loading}
        error={error}
      />
    </ScrollView>
  );
};

export default Booking;
