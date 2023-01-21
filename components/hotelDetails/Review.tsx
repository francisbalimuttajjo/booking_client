import React from "react";
import { Rating } from "react-native-ratings";
import { StyleSheet, Text, View, Image } from "react-native";
import { Review as ReviewType } from "../../types/apiTypes";

const Review = (props: { review: ReviewType }) => {
  const { review } = props;

  return (
    <View style={styles.container}>
      <Rating
        ratingColor="#326fa8"
        imageSize={30}
        readonly={true}
        type="custom"
        startingValue={review.rating}
      />

      <View style={styles.review_container}>
        <Text style={styles.review}>{review.review}</Text>
      </View>
      <View style={styles.image_container}>
        <Image
          style={styles.image}
          source={{
            uri: review.author.photo,
          }}
        />
        <Text style={styles.author}>{review.author.firstName}</Text>
      </View>
    </View>
  );
};

export default Review;

const styles = StyleSheet.create({
  container: {
    height: 180,
    width: 300,
    marginRight: 10,
    shadowColor: "rgba(0,0,0, .4)",
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    backgroundColor: "#fff",
    elevation: 6,
    borderRadius: 15,
    paddingHorizontal: "10%",
    paddingTop: "2%",
  },
  review_container: { height: "40%", width: "90%", alignSelf: "center" },
  image_container: {
    flexDirection: "row",
    height: "35%",
    alignItems: "flex-end",
  },
  review: { textTransform: "capitalize", fontSize: 16, opacity: 0.8 },
  author: {
    textTransform: "capitalize",
    fontSize: 16,
    marginLeft: 10,
    fontWeight: "bold",
    opacity: 0.5,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignSelf: "center",
    marginBottom: -20,
  },
});
