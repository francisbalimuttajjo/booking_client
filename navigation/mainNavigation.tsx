import React from "react";
import Ionicon from "react-native-vector-icons/AntDesign";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, TouchableOpacity } from "react-native";
import HomeScreen from "./screens/home";
import MapScreen from "./screens/map";
import SearchScreen from "./screens/search";
import BookingScreen from "./screens/booking";
import ProfileScreen from "./screens/profile";
import CameraScreen from "./screens/camera";
import HotelDetailsScreen from "./screens/hotelDetails";
import ChangePasswordScreen from "./screens/changePassword";
import { mainStackParams, mainRoutes } from "../types/screenTypes";

const Screen = () => {
  const Stack = createStackNavigator<mainStackParams>();
  const test = true;

  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          headerStyle: {},
          headerTitleStyle: {
            textTransform: "capitalize",
          },
        }}
      >
        <Stack.Screen
          name={mainRoutes.Home}
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name={mainRoutes.Profile} component={ProfileScreen} />
        <Stack.Screen
          name={mainRoutes.Booking}
          component={BookingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={mainRoutes.Camera}
          component={CameraScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={mainRoutes.ChangePassword}
          component={ChangePasswordScreen}
          options={{ title: "Change Password" }}
        />
        <Stack.Screen
          name={mainRoutes.Map}
          component={MapScreen}
          options={{ title: "" }}
        />

        <Stack.Screen name={mainRoutes.Search} component={SearchScreen} />

        <Stack.Screen
          name={mainRoutes.HotelDetails}
          component={HotelDetailsScreen}
          options={({ navigation, route }) => {
            return {
              title: "",
              headerRight: () => (
                <TouchableOpacity
                  // disabled={loading}
                  onPress={async () => {
                    console.log("pressed");
                  }}
                  activeOpacity={0.6}
                  style={styles.btn}
                >
                  {test && <Ionicon name="heart" size={26} color="red" />}
                  {!test && <Ionicon name="hearto" size={26} color="black" />}
                </TouchableOpacity>
              ),
            };
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default Screen;

const styles = StyleSheet.create({
  btn: {
    marginTop: "5%",
    borderColor: "rgba(0,0,0, .4)",
    borderWidth: 1,
    width: 40,
    height: 40,
    marginRight: "10%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
