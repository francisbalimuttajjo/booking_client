import React from "react";
import { Text } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const ForgotPasswordScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>forgot password</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default ForgotPasswordScreen;
