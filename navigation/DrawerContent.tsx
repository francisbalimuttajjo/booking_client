import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Title, Caption, Drawer } from "react-native-paper";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import useFns from "../utils/fns/useAppFns";
import UserContext from "../utils/fns/userContext";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../types/apiTypes";

const DrawerContent = (props: DrawerContentComponentProps) => {
  const { initialState } = React.useContext(UserContext);
  const screens = ["Home", "Profile", "Booking"];
  const { navigate } = useNavigation<NavigationProps>();
  const { handleLogOut } = useFns();

  const logoutHandler = () => {
    AsyncStorage.removeItem("USER_DETAILS")
      .then(() => {
        handleLogOut();
        navigate("Home");
      })
      .catch((err) => {
        console.log(err);
        navigate("Home");
      });
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.image_container}>
          <Avatar.Image size={84} source={{ uri: initialState.user.photo }} />
        </View>

        <View style={styles.details_container}>
          <Title style={styles.text}>
            {initialState.user.firstName} {initialState.user.lastName}
          </Title>
          <Caption>{initialState.user.email}</Caption>
        </View>

        <Drawer.Section style={{ flex: 1 }}>
          {screens.map((screen, index) => (
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
        <DrawerItem label="LogOut" onPress={logoutHandler} />
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
