import React from "react";
import { StyleSheet, View } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
import { Avatar, Title, Caption, Drawer } from "react-native-paper";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import UserContext from "../utils/fns/userContext";

const DrawerContent = (props: DrawerContentComponentProps) => {
  const { initialState, handleLogOut } = React.useContext(UserContext);
  const screens = ["Home", "Profile", "Booking", "LogIn", "SignUp"];

  const displayScreens =
    initialState.isLoggedIn === true ? screens.slice(0, 3) : screens.slice(3);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.image_container}>
          {initialState.user.photo === "" ? (
            <Ionicon name="ios-person-circle-outline" size={84} color="black" />
          ) : (
            <Avatar.Image size={84} source={{ uri: initialState.user.photo }} />
          )}
        </View>

        <View style={styles.details_container}>
          <Title style={styles.text}>
            {initialState.user.firstName} {initialState.user.lastName}
          </Title>
          <Caption>{initialState.user.email}</Caption>
        </View>

        <Drawer.Section style={{ flex: 1 }}>
          {displayScreens.map((screen, index) => (
            <DrawerItem
              key={index}
              label={screen}
              activeTintColor="red"
              activeBackgroundColor="#fff"
              onPress={() => props.navigation.navigate(screen)}
            />
          ))}
        </Drawer.Section>
      </DrawerContentScrollView>

      <Drawer.Section>
        {initialState.isLoggedIn === true && (
          <DrawerItem
            label="LogOut"
            onPress={() => {
              handleLogOut();
              props.navigation.navigate("Home");
            }}
          />
        )}
      </Drawer.Section>
      <View style={styles.footer}>
        <Caption>&copy; &nbsp;Booking</Caption>
      </View>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  image_container: {
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    height: 150,
  },
  details_container: { width: "90%", alignSelf: "center" },
  text: { fontSize: 24, textTransform: "capitalize" },
  footer: { width: "70%", alignSelf: "center", alignItems: "center" },
});
