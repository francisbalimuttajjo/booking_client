import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import Success from '../../components/reusableComponents/Success';
import {drawerStackParams} from '../../types/screenTypes';

type Props = NativeStackScreenProps<drawerStackParams, 'Success'>;

const SuccessScreen = ({route}: Props) => {
  const {message, title, screen} = route.params;

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Success message={message} title={title} screen={screen} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default SuccessScreen;

import React from 'react';
