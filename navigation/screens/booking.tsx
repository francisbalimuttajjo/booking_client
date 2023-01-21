import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Booking from "../../components/booking/Booking";
import { mainStackParams } from "../../types/screenTypes";

type Props = NativeStackScreenProps<mainStackParams, "Booking">;

const BookingScreen = ({ route }: Props) => {
  const { hotel } = route.params;
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Booking hotel={hotel} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default BookingScreen;
