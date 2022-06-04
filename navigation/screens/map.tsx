import React from "react";
import { Text } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { mainStackParams } from "../../types/screenTypes";

type Props = NativeStackScreenProps<mainStackParams, "Map">;

const MapScreen = ({ route }: Props) => {
  const { hotel } = route.params;
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>{hotel.name}</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default MapScreen ;
