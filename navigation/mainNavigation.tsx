import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { mainStackParams,mainRoutes } from "../types/screenTypes";
import TabsPage from './bottomTabs'

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
            },
          }}
        >
           <Stack.Screen
              name={mainRoutes.WelcomePage}
              component={TabsPage}
              options={{ headerShown: false }}
            />
          
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Screen;