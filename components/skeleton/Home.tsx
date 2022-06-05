import React from "react";
import { StyleSheet, View } from "react-native";
import Skeleton from "./Skeleton";

const Home = () => {
  return (
    <>
      <Skeleton height={50} width="100%" margin="20%" />
      <View style={{ marginLeft: "5%" }}>
        <View style={styles.user}>
          <Skeleton height={70} width={70} borderRadius={35} margin={10} />
        </View>

        <Skeleton height={30} width={150} />
        <Skeleton height={40} width={300} margin={10} />
        <Skeleton height={30} width={300} margin={10} />

        <View style={styles.container}>
          <Skeleton height={150} width="45%" borderRadius={15} margin="7%" />
          <Skeleton height={150} width="45%" borderRadius={15} margin="7%" />
        </View>
        <Skeleton height={30} width={200} margin={10} />
        <View style={styles.container}>
          <Skeleton height={100} width="45%" borderRadius={15} margin="7%" />
          <Skeleton height={100} width="45%" borderRadius={15} margin="7%" />
        </View>
      </View>
    </>
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
