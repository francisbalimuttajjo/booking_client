import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
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
    handleSearch,
    onDismissLocation,
    onDismissPrice,
    openPrice,
    openLocation,
  } = useFns();

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Searchbar
          style={{ width: "85%" }}
          placeholder="search  ..."
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={handleSearch}
          style={styles.btn}
        >
          <Icon name="search" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

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
  btn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#326fa8",
    width: "15%",
  },
  information: {
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: "2%",
    alignSelf: "center",
  },
});
