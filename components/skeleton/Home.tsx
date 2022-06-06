import React from "react";
import { StyleSheet, View } from "react-native";
import Skeleton from "./Skeleton";

const Home = () => {
  return (
    <View style={{ paddingHorizontal: "5%" }}>
      <View style={styles.user}>
        <Skeleton height={70} width={70} borderRadius={35} margin="10%" />
      </View>

      <Skeleton height={30} width={150} />
      <Skeleton height={40} width={300} margin={10} />
      <Skeleton height={30} width={300} margin={10} />

      <View style={styles.container}>
        <Skeleton
          height={200}
          width="70%"
          borderTopLeftRadius={15}
          borderTopRightRadius={15}
          margin="7%"
        />
        <Skeleton
          height={200}
          width="20%"
          margin="7%"
          borderTopLeftRadius={15}
        />
      </View>
      <Skeleton height={30} width={200} margin={20} />
      <View style={styles.container}>
        <Skeleton height={120} width="70%" borderRadius={15} margin="7%" />
        <Skeleton
          height={120}
          width="25%"
          borderTopLeftRadius={15}
          borderBottomLeftRadius={15}
          margin="7%"
        />
      </View>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  user: {
    right: 10,
    alignSelf: "flex-end",
  },
});
