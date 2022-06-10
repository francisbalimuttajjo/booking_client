import React from "react";
import { Hotel } from "../../types/apiTypes";
import useFns from "../profile/useReset";
import { getDate } from "../../utils/fns/others";
import api from "../../utils/api";

const UseFns = (props: { hotel: Hotel }) => {
  const [error, setError] = React.useState<string>("");
  const [nights, setNights] = React.useState<number>(1);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [checkinDate, setCheckinDate] = React.useState<Date>(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] =
    React.useState<boolean>(false);

  const showDatePicker = () => setDatePickerVisibility(true);

  const hideDatePicker = () => setDatePickerVisibility(false);

  const { navigate } = useFns();

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

  const CASH_PAID = nights * props.hotel.price + 5;

  const { date } = getDate(checkinDate);

  const handleSubmit = () => {
    setLoading(true);
    api
      .bookHotel({
        hotel_Id: props.hotel.id,
        cash_paid: CASH_PAID,
        checkin_date: checkinDate,
        nights,
      })
      .then(() => {
        setLoading(false);
        navigate("Home");
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response.data);
      });
  };

  return {
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
  };
};

export default UseFns;
