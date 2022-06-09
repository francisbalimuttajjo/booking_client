import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Form from "../../components/profile/PasswordReset";

const PasswordResetScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Form />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default PasswordResetScreen;
