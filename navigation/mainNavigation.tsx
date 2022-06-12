import React from "react";
import Ionicon from "react-native-vector-icons/AntDesign";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity } from "react-native";
import HomeScreen from "./screens/home";
import MapScreen from "./screens/map";
import SignUpScreen from "./screens/signUp";
import SearchScreen from "./screens/search";
import BookingScreen from "./screens/booking";
import MyBookingsScreen from "./screens/myBooking";
import ProfileScreen from "./screens/profile";
import CameraScreen from "./screens/camera";
import ReviewScreen from "./screens/review";
import SuccessScreen from "./screens/success";
import ForgotPasswordScreen from "./screens/forgotPassword";
import LoginScreen from "./screens/login";
import HotelDetailsScreen from "./screens/hotelDetails";
import ChangePasswordScreen from "./screens/changePassword";
import { mainStackParams, mainRoutes } from "../types/screenTypes";
import { Review } from "../types/apiTypes";
import useFns from "../components/profile/useFns";

const Screen = () => {
  const Stack = createStackNavigator<mainStackParams>();
  const { initialState } = useFns();

  return (
    <NavigationContainer>
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
          <Stack.Screen
            name={mainRoutes.SignUp}
            component={SignUpScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={mainRoutes.MyBookings}
            component={MyBookingsScreen}
            options={{ title: "My Bookings" }}
          />
          <Stack.Screen
            name={mainRoutes.ForgotPassword}
            component={ForgotPasswordScreen}
            options={{ title: "Forgot Password" }}
          />

          <Stack.Screen
            name={mainRoutes.LogIn}
            component={LoginScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name={mainRoutes.Success}
            component={SuccessScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={mainRoutes.HotelDetails}
            component={HotelDetailsScreen}
            options={({ navigation, route }) => {
              let REVIEWS: Review[] | undefined = route.params.hotel.reviews;
              let IS_REVIEWED: boolean = false;

              if (REVIEWS !== undefined) {
                const MY_REVIEWS = REVIEWS.filter(
                  (review) => review.user === initialState.user.email
                );

                if (MY_REVIEWS.length) {
                  IS_REVIEWED = true;
                }
              }

              return {
                title: "",
                headerRight: () => (
                  <TouchableOpacity
                    onPress={async () => {
                      navigation.navigate("Review", {
                        hotel: route.params.hotel,
                      });
                    }}
                    disabled={IS_REVIEWED}
                    activeOpacity={0.6}
                    style={styles.btn}
                  >
                    {IS_REVIEWED && (
                      <Ionicon name="heart" size={26} color="red" />
                    )}
                    {!IS_REVIEWED && (
                      <Ionicon name="hearto" size={26} color="black" />
                    )}
                  </TouchableOpacity>
                ),
              };
            }}
          />
          <Stack.Screen
            name={mainRoutes.Review}
            component={ReviewScreen}
            options={{ title: "" }}
          />
          <Stack.Screen name={mainRoutes.Profile} component={ProfileScreen} />
          <Stack.Screen
            name={mainRoutes.Booking}
            component={BookingScreen}
            options={{ title: "Confirm & Book" }}
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
            options={({ route }) => {
              return {
                title: route.params.hotel.name,
              };
            }}
          />

          <Stack.Screen name={mainRoutes.Search} component={SearchScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
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
