import React from 'react';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import SignUp from '../../components/login/SignUp';

const SignUpScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <SignUp />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default SignUpScreen;
