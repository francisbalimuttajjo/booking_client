import React from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Home from "../../components/home/Home";

const HomeScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default HomeScreen;
