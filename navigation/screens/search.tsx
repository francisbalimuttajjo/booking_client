import { View, Text } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const SearchScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>Seach screen </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default SearchScreen;
