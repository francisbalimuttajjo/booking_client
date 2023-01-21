import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Profile from '../../components/profile/Profile'

const ProfileScreen = () => {
     return (
    <SafeAreaProvider>
      <SafeAreaView>       
       <Profile />
      </SafeAreaView>
    </SafeAreaProvider>
  );
} 

export default ProfileScreen;
