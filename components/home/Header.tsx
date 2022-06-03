import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import EvilIcon from "react-native-vector-icons/EvilIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { NavigationProps } from "../../types/apiTypes";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const { navigate } = useNavigation<NavigationProps>();
  const handleSearch = () => navigate("Search");
  return (
    <View>
      <View style={styles.sub_container}>
        <TouchableOpacity activeOpacity={0.5}>
          <Icon name="align-left" size={30} color="black" />
        </TouchableOpacity>
        <View style={styles.location_container}>
          <EvilIcon name="location" size={24} color="black" />
          <Text>Kampala Uganda</Text>
        </View>

        <View style={styles.search_container}>
          <TouchableOpacity
            style={styles.search_btn}
            activeOpacity={0.5}
            onPress={handleSearch}
          >
            <EvilIcon name="search" size={32} color="#32a844" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.center} activeOpacity={0.5}>
            <EntypoIcon name="dots-three-vertical" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default Header;
const styles = StyleSheet.create({
  sub_container: {
    width: "85%",
    marginTop: "3%",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  location_container: {
    flexDirection: "row",
    width: "60%",
    justifyContent: "center",
  },
  search_container: { flexDirection: "row", right: 0, position: "absolute" },
  search_btn: {
    width: 34,
    height: 34,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 17,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});
