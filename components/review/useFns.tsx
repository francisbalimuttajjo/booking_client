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
    if (review.length < 2) {
      setError("Please provide a valid review");
      return;
    }
    setLoading(true);
    api
      .reviewHotel({ hotel_Id: props.hotel.id, rating, review })
      .then(() => {
        setLoading(false);

        navigate("Success", {
          message: "Thanks For The Feedback",
          screen: "Home",
          title: "Home",
        });
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
