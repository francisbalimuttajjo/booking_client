import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import useFns from "./useFns";
import Hotel from "./Hotel";
import Filter from "./FilterComponent";

const Search = () => {
  const {
    information,
    searchQuery,
    data,
    handlePrice,
    handleLocation,
    onChangeSearch,
    loadingPrice,
    loadingName,
    loadingLocation,
    isLocationOpen,
    isPriceOpen,
    onDismissLocation,
    onDismissPrice,
    openPrice,
    openLocation,
  } = useFns();

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="search  ..."
        onChangeText={onChangeSearch}
        value={searchQuery}
      />

      <Filter
        isPriceOpen={isPriceOpen}
        isLocationOpen={isLocationOpen}
        handlePrice={handlePrice}
        handleLocation={handleLocation}
        onDismissLocation={onDismissLocation}
        onDismissPrice={onDismissPrice}
        openPrice={openPrice}
        openLocation={openLocation}
      />
      <Text style={styles.information}>{information}</Text>
      {loadingName || loadingLocation || loadingPrice ? (
        <Text>Loading....</Text>
      ) : (
        <FlatList
          contentContainerStyle={styles.flatList}
          data={data}
          renderItem={(hotel) => <Hotel hotel={hotel.item} />}
          keyExtractor={(hotel) => hotel.id.toString()}
        />
      )}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: { marginTop: "10%", width: "90%", alignSelf: "center" },
  flatList: { paddingTop: "5%", paddingBottom: "200%" },
  information: {
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: "2%",
    alignSelf: "center",
  },
});
