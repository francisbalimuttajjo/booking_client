import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ReadMore = (props: { description?: string }) => {
  const { description } = props;

  const [isReadMore, setIsReadMore] = React.useState(true);
  const toggleReadMore = () => setIsReadMore((isReadMore) => !isReadMore);

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>
        {description !== undefined
          ? isReadMore
            ? description.slice(0, 90)
            : description
          : ""}
        <Text onPress={toggleReadMore} style={{ color: "#326fa8" }}>
          &nbsp; {isReadMore ? "ReadMore..." : "show less ..."}
        </Text>
      </Text>
    </View>
  );
};
export default ReadMore;

const styles = StyleSheet.create({
  container: { width: "93%", alignSelf: "center", marginTop: "2%" },
  text1: {
    lineHeight: 28,
    fontWeight: "bold",
    opacity: 0.6,
    fontSize: 16,
  },
});
