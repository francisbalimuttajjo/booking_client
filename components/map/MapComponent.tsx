import React from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {Title} from 'react-native-paper';
import {Hotel} from '../../types/apiTypes';
import ReadMore from '../hotelDetails/ReadMore';

const Map = (props: {hotel: Hotel}) => {
  const region = {
    latitude: props.hotel.location[0].latitude,
    longitude: props.hotel.location[0].longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  return (
    <View style={styles.container}>
      <Title style={styles.title}>Location</Title>

      <MapView style={styles.mapView} region={region}>
        <Marker coordinate={region} />
      </MapView>
      <ReadMore description={props.hotel.description} />
    </View>
  );
};
export default Map;

const styles = StyleSheet.create({
  mapView: {height: 150, width: '95%', alignSelf: 'center'},
  container: {backgroundColor: '#fff'},
  title: {marginLeft: '5%'},
});
