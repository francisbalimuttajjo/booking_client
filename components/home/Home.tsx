import { useQuery } from "react-query";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Hotel from "./Hotel";
import Header from "./Header";
import Greeting from "./Greeting";
import api from "../../utils/api";
import PopularHotelsList from "./PopularHotelsList";
import { Hotel as HotelType } from "../../types/apiTypes";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { LinearGradient } from "expo-linear-gradient";
import SkeletonContent from "react-native-skeleton-content";

const FirstExample = ({}) => (
  <SkeletonPlaceholder>
    <SkeletonPlaceholder.Item
      width={100}
      height={100}
      borderRadius={100}
      borderWidth={5}
      borderColor="white"
      alignSelf="center"
      position="relative"
    />
    <SkeletonPlaceholder.Item
      width={120}
      height={20}
      alignSelf="center"
      marginTop={12}
      borderRadius={4}
    />
    <SkeletonPlaceholder.Item
      width={240}
      height={20}
      alignSelf="center"
      marginTop={12}
      borderRadius={4}
    />
    <SkeletonPlaceholder.Item
      width={240}
      height={20}
      alignSelf="center"
      marginTop={12}
      borderRadius={4}
    />
  </SkeletonPlaceholder>
);

FirstExample.propTypes = {};
FirstExample.defaultProps = {};

const App = () => {
  return (
    // <SkeletonPlaceholder>
    //   <View style={{ flexDirection: "row", alignItems: "center" }}>
    //     <View style={{ width: 60, height: 60, borderRadius: 50 }} />
    //     <View style={{ marginLeft: 20 }}>
    //       <View style={{ width: 120, height: 20, borderRadius: 4 }} />
    //       <View
    //         style={{ marginTop: 6, width: 80, height: 20, borderRadius: 4 }}
    //       />
    //     </View>
    //   </View>
    // </SkeletonPlaceholder>
    <SkeletonContent
      containerStyle={{ flex: 1, width: 300 }}
      isLoading={false}
      layout={[
        { key: "someId", width: 220, height: 200, marginBottom: 6 },
        { key: "someOtherId", width: 180, height: 200, marginBottom: 6 },
      ]}
    >
      <Text style={{}}>Your content</Text>
      <Text style={{}}>Other content</Text>
    </SkeletonContent>
  );
};

const Home = () => {
  const { isLoading: loadingHotel, data: hotels } = useQuery<
    HotelType[],
    Error
  >("HOTELS", api.getHotels, {
    onError: (err) => {},
  });

  if (loadingHotel) {
    return <Text>Loading ....</Text>;
  }

  return (
    <View>
      <Header />
      <Greeting />
      <Text style={{ ...styles.text, marginTop: "5%" }}>
        Recommended Places
      </Text>
      <FlatList
        horizontal
        contentContainerStyle={{ paddingHorizontal: "5%" }}
        data={hotels}
        renderItem={(hotel) => <Hotel hotel={hotel.item} />}
        keyExtractor={(hotel) => hotel.id.toString()}
      />
      <Text style={{ ...styles.text, marginTop: "3%" }}>Popular Places</Text>
      <PopularHotelsList />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "capitalize",
    width: "90%",
    alignSelf: "center",
    opacity: 0.4,
    marginBottom: "5%",
  },
});
