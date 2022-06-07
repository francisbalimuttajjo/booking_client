import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { drawerStackParams, drawerRoutes } from "../types/screenTypes";
import ProfileScreen from "./screens/profile";
import StackNavigator from "./mainNavigation";
import DrawerContent from "./DrawerContent";

const Drawer = createDrawerNavigator<drawerStackParams>();

function DrawerComponent() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerType: "back",
        }}
        drawerContent={(props) => (
          <DrawerContent children={undefined} {...props} />
        )}
      >
        <Drawer.Screen
          name={drawerRoutes.Home}
          component={StackNavigator}
          options={{ headerShown: false }}
        />

        <Drawer.Screen
          name={drawerRoutes.Profile}
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerComponent;
