import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Title } from "react-native-paper";
import Entypo from "react-native-vector-icons/Entypo";
import { NavigationProps } from "../../types/apiTypes";
import { useNavigation } from "@react-navigation/native";
import { BottomSheet } from "react-native-btr";
import Icon from "react-native-vector-icons/Ionicons";
import useFns from "../profile/useFns";

type Props = {
  open: boolean;
  handleClose: () => void;
};

const Header = (props: Props) => {
  const { navigate } = useNavigation<NavigationProps>();
  const { initialState, handleLogOut } = useFns();
  const { isLoggedIn } = initialState;

  const handlePress = (screen: string) => {
    props.handleClose();
    navigate(screen);
  };

  return (
    <BottomSheet
      visible={props.open}
      onBackButtonPress={props.handleClose}
      onBackdropPress={props.handleClose}
    >
      <View style={styles.container}>
        {isLoggedIn ? (
          <>
            <TouchableOpacity
              onPress={() => handlePress("Profile")}
              style={{ flexDirection: "row", ...styles.btn }}
            >
              <Icon name="settings-outline" size={24} color="black" />
              <Title style={styles.btn_text}>Account Settings</Title>
            </TouchableOpacity>
            <View style={{ ...styles.btn, flexDirection: "row" }}>
              <TouchableOpacity
                onPress={() => handlePress("MyBookings")}
                style={styles.booking_container}
              >
                <Entypo name="book" size={30} color="black" />
                <Title style={styles.btn_text}>My Bookings</Title>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  props.handleClose();
                  handleLogOut();
                }}
                activeOpacity={0.6}
                style={styles.log_out}
              >
                <Icon name="ios-log-out-outline" size={30} color="#fff" />
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <>
            <TouchableOpacity
              onPress={() => handlePress("LogIn")}
              style={styles.btn}
            >
              <Title style={styles.title}>LogIn</Title>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handlePress("SignUp")}
              style={styles.btn}
            >
              <Title style={styles.title}>Sign Up</Title>
            </TouchableOpacity>
          </>
        )}
      </View>
    </BottomSheet>
  );
};
export default Header;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: 150,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    paddingHorizontal: "5%",
    paddingVertical: "5%",
  },
  log_out: {
    backgroundColor: "#326fa8",
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    width: "80%",
    alignSelf: "center",
    paddingTop: "5%",
  },
  title: { fontSize: 16, color: "#326fa8" },
  btn_text: { fontSize: 16, marginLeft: 10 },
  booking_container: {
    flexDirection: "row",
    flex: 1,
  },
});
