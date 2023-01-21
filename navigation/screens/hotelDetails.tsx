import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import Details from '../../components/hotelDetails/HotelDetails';
import {mainStackParams} from '../../types/screenTypes';

type Props = NativeStackScreenProps<mainStackParams, 'HotelDetails'>;

const HotelDetailsScreen = ({route}: Props) => {
  const {hotel} = route.params;

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Details hotel={hotel} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default HotelDetailsScreen;

import React from 'react';
