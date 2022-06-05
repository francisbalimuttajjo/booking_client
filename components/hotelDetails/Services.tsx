import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { Hotel } from "../../types/apiTypes";

const otherServices = [
  { icon: "wifi", name: "Wifi", id: 0 },
  { icon: "free-breakfast", name: "Free Breakfast", id: 1 },
  { icon: "dinner-dining", name: "Dinner", id: 2 },
  { icon: "local-taxi", name: "PickUp / Drop Off", id: 3 },
];

const OtherService = (props: {
  service: { icon: string; name: string; id: number };
}) => {
  return (
    <View style={styles.container}>
      <MaterialIcon name={props.service.icon} size={44} color="black" />
      <Text>{props.service.name}</Text>
    </View>
  );
};

const Services = (props: { reviews: Hotel["reviews"] }) => {
  return (
    <View style={styles.main_container}>
      <Text style={styles.text}>Other Services</Text>
      <FlatList
        horizontal
        contentContainerStyle={{
          ...styles.flatList,
          paddingBottom: props?.reviews?.length == undefined ? "65%" : "5%",
        }}
        data={otherServices}
        renderItem={(service) => <OtherService service={service.item} />}
        keyExtractor={(service) => service.id.toString()}
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
  flatList: { paddingHorizontal: "5%" },
});
