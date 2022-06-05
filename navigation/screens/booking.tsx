import { View, Text } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const BookingScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>Booking screen </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default BookingScreen;
