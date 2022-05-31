import { View, Text } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const ProfileScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>Profile screen </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default ProfileScreen;
