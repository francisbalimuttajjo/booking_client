import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import useFns from "./useFns";
import Hotel from "./Hotel";

const Search = () => {
  const { searchQuery, onChangeSearch, data, information } = useFns();

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="search ..."
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <Text style={styles.information}>{information}</Text>

      <FlatList
        contentContainerStyle={{ paddingTop: "5%", paddingBottom: "65%" }}
        data={data}
        renderItem={(hotel) => <Hotel hotel={hotel.item} />}
        keyExtractor={(hotel) => hotel.id.toString()}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: { marginTop: "10%", width: "90%", alignSelf: "center" },
  information: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: "2%",
    alignSelf: "center",
  },
});
