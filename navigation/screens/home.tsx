import { View, Text } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>home screen </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default HomeScreen;
