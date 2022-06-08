import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { drawerStackParams, drawerRoutes } from "../types/screenTypes";
import ForgotPasswordScreen from "./screens/forgotPassword";
import ProfileScreen from "./screens/profile";
import LoginScreen from "./screens/login";
import SignUpScreen from "./screens/signUp";
import SuccessScreen from "./screens/success";
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
        drawerContent={(props) => <DrawerContent {...props} />}
      >
      
        <Drawer.Screen
          name={drawerRoutes.Home}
          component={StackNavigator}
          options={{ headerShown: false }}
        />
               

        <Drawer.Screen
          name={drawerRoutes.Success}
          component={SuccessScreen}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name={drawerRoutes.Profile}
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name={drawerRoutes.SignUp}
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name={drawerRoutes.ForgotPassword}
          component={ForgotPasswordScreen}
          options={{ title: "Forgot Password" }}
        />

        <Drawer.Screen
          name={drawerRoutes.LogIn}
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerComponent;
