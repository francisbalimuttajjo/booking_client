import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

const otherServices = [
  { icon: "wifi", name: "Wifi" },
  { icon: "free-breakfast", name: "Free Breakfast" },
  { icon: "dinner-dining", name: "Dinner" },
  { icon: "local-taxi", name: "PickUp/ Drop Off" },
];

const OtherService = (props: { service: { icon: string; name: string } }) => {
  return (
    <View style={styles.container}>
      <MaterialIcon name={props.service.icon} size={44} color="black" />
      <Text>{props.service.name}</Text>
    </View>
  );
};

const Services = () => {
  return (
    <View style={styles.main_container}>
      <Text style={styles.text}>Other Services</Text>
      <FlatList
        horizontal
        contentContainerStyle={styles.flatList}
        data={otherServices}
        renderItem={(service) => <OtherService service={service.item} />}
        keyExtractor={(index) => index.toString()}
      />
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({
  main_container: {
    width: "95%",
    alignSelf: "center",
    marginBottom: "5%",
  },
  container: { width: 100, justifyContent: "center", alignItems: "center" },
  text: { opacity: 0.5, fontSize: 24, marginVertical: "5%" },
  flatList: { paddingHorizontal: "5%", paddingBottom: "5%" },
});
