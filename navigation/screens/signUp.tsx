import React from "react";
import { Text } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Home from "../../components/home/Home";

const SignUpScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>signUp</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default SignUpScreen;
