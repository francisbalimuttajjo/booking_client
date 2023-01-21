import React from 'react';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import Form from '../../components/login/ForgotPassword';

const ForgotPasswordScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Form />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default ForgotPasswordScreen;
