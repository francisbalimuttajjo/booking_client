import React, { useContext } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
import UserContext from "../../utils/fns/userContext";
import useFns from "./useFns";

const Greeting = () => {
  const { navigateToProfile } = useFns();
  const { initialState } = useContext(UserContext);
  console.log("isloggedIn", initialState.isLoggedIn);

  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={navigateToProfile}
        style={styles.container}
      >
        {initialState.user.photo === "" ? (
          <Ionicon name="ios-person-circle-outline" size={52} color="black" />
        ) : (
          <Image
            style={styles.image}
            source={{
              uri: initialState.user.photo,
            }}
          />
        )}
      </TouchableOpacity>
      <View style={styles.sub_container}>
        <Text style={styles.greetings_1}>
          Hi {initialState.user.firstName},
        </Text>
        <Text style={styles.greetings_2}>Where do you want to go?</Text>
      </View>
    </View>
  );
};
export default Greeting;

const styles = StyleSheet.create({
  image: {
    width: 52,
    height: 52,
    borderRadius: 26,
  },
  greetings_2: {
    fontSize: 26,
    fontWeight: "bold",
    opacity: 0.6,
    marginTop: 5,
  },
  container: { width: "90%", alignItems: "flex-end", marginTop: "8%" },
  sub_container: { width: "90%", alignSelf: "center" },
  greetings_1: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});
