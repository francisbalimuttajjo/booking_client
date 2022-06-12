import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Rating } from "react-native-ratings";
import { Caption, TextInput, Title } from "react-native-paper";
import { Hotel } from "../../types/apiTypes";
import Info from "../reusableComponents/Info";
import useFns from "./useFns";

const Review = (props: { hotel: Hotel }) => {
  const {
    rating,
    review,
    error,
    handleRating,
    onChangeText,
    handleSubmit,
    loading,
  } = useFns({ hotel: props.hotel });
  return (
    <View style={styles.container}>
      <Title style={styles.review_container}>Leave Review</Title>
      <View style={styles.hotel_container}>
        <Caption style={{ fontSize: 20 }}>How was Your experience at </Caption>
        <Title style={styles.name}>{props.hotel.name}</Title>
      </View>
      <View style={{ marginTop: "10%" }}>
        <Caption style={styles.caption}>Rate Us</Caption>
        <Rating
          ratingColor="#326fa8"
          imageSize={30}
          type="custom"
          startingValue={rating}
          onFinishRating={handleRating}
        />
      </View>
      <View style={{ marginTop: "10%" }}>
        <Title style={styles.title}>Share More Details</Title>
        <TextInput
          multiline={true}
          mode="outlined"
          style={styles.input}
          numberOfLines={4}
          onChangeText={onChangeText}
          value={review}
          placeholder="Enter Review"
          label="Review"
          activeOutlineColor="#326fa8"
          error={review.length < 10 ? true : false}
        />
      </View>
      {error !== "" && <Info error={error} />}
      <TouchableOpacity
        disabled={loading}
        onPress={handleSubmit}
        style={styles.btn}
        activeOpacity={0.6}
      >
        <Title style={{ color: "#fff" }}>Publish Review</Title>
      </TouchableOpacity>
    </View>
  );
};

export default Review;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingVertical: "5%",
    height: "100%",
  },
  review_container: {
    width: "80%",
    alignSelf: "center",
    fontSize: 30,
    marginTop: "5%",
  },
  hotel_container: {
    width: "80%",
    alignSelf: "center",
    marginTop: "5%",
    alignItems: "center",
  },
  input: { width: "90%", alignSelf: "center" },
  name: { fontSize: 18, textTransform: "capitalize" },
  title: { width: "80%", alignSelf: "center" },
  caption: { width: "80%", alignSelf: "center", fontSize: 20 },
  btn: {
    backgroundColor: "#326fa8",
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: "3%",
    bottom: 10,
    position: "absolute",
  },
});
