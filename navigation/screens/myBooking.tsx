import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import Booking from '../../components/booking/MyBookings';

const MyBookingScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Booking />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default MyBookingScreen;
