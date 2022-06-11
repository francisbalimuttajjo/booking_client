import React from "react";
import { Hotel } from "../../types/apiTypes";
import api from "../../utils/api";
import useFns from "../profile/useReset";

const UseFns = (props: { hotel: Hotel }) => {
  const { navigate } = useFns();

  const [rating, setRating] = React.useState<number>(3);
  const [review, setReview] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");

  const [loading, setLoading] = React.useState<boolean>(false);
  const handleRating = (rating: number) => setRating(rating);
  const onChangeText = (review: string) => setReview(review);

  const handleSubmit = () => {
    setLoading(true);
    if (review.length < 10) {
      return;
    }
    api
      .reviewHotel({ hotel_Id: props.hotel.id, rating, review })
      .then(() => {
        setLoading(false);
        navigate("Home");
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response.data.data);
      });
  };
  return {
    rating,
    loading,
    review,
    error,
    handleRating,
    onChangeText,
    handleSubmit,
  };
};

export default UseFns;
