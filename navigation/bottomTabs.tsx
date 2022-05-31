import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/home";
import ProfileScreen from "./screens/profile";
import SearchScreen from "./screens/search";

import { tabRoutes, tabStackParams } from "../types/screenTypes";

const TabsContainer = () => {
  const Tab = createBottomTabNavigator<tabStackParams>();
  const isLoggedIn = true;
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = "";

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person-sharp" : "person-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "search-sharp" : "search-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: "#4a79f0",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: { paddingBottom: 2 },
      })}
    >
      <Tab.Group>
        <Tab.Screen
          options={{ headerShown: false }}
          name={tabRoutes.HomePage}
          component={HomeScreen}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name={tabRoutes.SearchPage}
          component={SearchScreen}
        />
        {isLoggedIn && (
          <Tab.Screen
            options={{ headerShown: false }}
            name={tabRoutes.ProfilePage}
            component={ProfileScreen}
          />
        )}
      </Tab.Group>
    </Tab.Navigator>
  );
};

export default TabsContainer;
