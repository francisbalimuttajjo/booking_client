import React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import {mainStackParams} from '../../types/screenTypes';
import Map from '../../components/map/Map';

type Props = NativeStackScreenProps<mainStackParams, 'Map'>;

const MapScreen = ({route}: Props) => {
  const {hotel} = route.params;
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Map hotel={hotel} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default MapScreen;
