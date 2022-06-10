import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MenuComponent from "./MenuComponent";
import useFns from "./useFns";

interface Props {
  openPrice: () => void;
  openLocation: () => void;
  onDismissLocation: () => void;
  onDismissPrice: () => void;
  isPriceOpen: boolean;
  isLocationOpen: boolean;
  handlePrice: (val: string) => void;
  handleLocation: (val: string) => void;
}

const Filter = (props: Props) => {
  const { hotelLocationsArray } = useFns();

  const data = ["$0-$50", "$50-$100", "$100-$150", "$150-$200"];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Filter By:</Text>

      <View style={styles.sub_container}>
        <MenuComponent
          title="Price"
          isVisible={props.isPriceOpen}
          onDismiss={props.onDismissPrice}
          handlePress={props.openPrice}
          data={data}
          handleMenuItemPress={props.handlePrice}
        />
        <MenuComponent
          title="Location"
          isVisible={props.isLocationOpen}
          onDismiss={props.onDismissLocation}
          handlePress={props.openLocation}
          data={[...new Set(hotelLocationsArray)]}
          handleMenuItemPress={props.handleLocation}
        />
      </View>
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "5%",
  },
  sub_container: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
  },
  text: { fontSize: 18, marginTop: "7%" },
});
