import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Review from "./Review";
import { Review as ReviewType } from "../../types/apiTypes";

const Reviews = (props: { reviews?: ReviewType[] }) => {
  if (!props.reviews?.length) {
    return <View />;
  }
  return (
    <View style={styles.main_container}>
      <Text style={styles.text}>What People Say</Text>
      <FlatList
        horizontal
        contentContainerStyle={styles.flatList}
        data={props.reviews}
        renderItem={(review) => <Review review={review.item} />}
        keyExtractor={(review) => review.id.toString()}
      />
    </View>
  );
};

export default Reviews;

const styles = StyleSheet.create({
  main_container: {
    width: "95%",
    alignSelf: "center",
    marginBottom: "5%",
  },

  text: { opacity: 0.5, fontSize: 24, marginVertical: "5%" },
  flatList: { paddingHorizontal: "5%", paddingBottom: "25%" },
});
