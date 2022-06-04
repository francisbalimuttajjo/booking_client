import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { mainStackParams, mainRoutes } from "../types/screenTypes";
import HomeScreen from "./screens/home";
import ProfileScreen from "./screens/profile";
import SearchScreen from "./screens/search";
import HotelDetailsScreen from "./screens/hotelDetails";

const Screen = () => {
  const Stack = createStackNavigator<mainStackParams>();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group
          screenOptions={{
            headerStyle: { backgroundColor: "transparent" },
            headerTitleStyle: {
              fontWeight: "bold",
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
            name={mainRoutes.Search}
            component={SearchScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={mainRoutes.HotelDetails}
            component={HotelDetailsScreen}
            options={({ route }) => ({
              title: `  ${route.params.hotel.name} `,
            })}
          />
          <Stack.Screen
            name={mainRoutes.Profile}
            component={ProfileScreen}
            options={{ headerShown: false }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Screen;
