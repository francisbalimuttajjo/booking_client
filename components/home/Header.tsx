import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  PermissionsAndroid,
} from 'react-native';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import {NavigationProps} from '../../types/apiTypes';
import {useNavigation} from '@react-navigation/native';
import BottomSheet from './BottomSheet';
import Geolocation from 'react-native-geolocation-service';
import axios from 'axios';

const Header = () => {
  const {navigate} = useNavigation<NavigationProps>();
  const [location, setLocation] = React.useState<string>('');
  const handleSearch = () => navigate('Search');
  const [open, setIsOpen] = React.useState<boolean>(false);
  const handleClose = () => setIsOpen(false);

  React.useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Booking Permission',
            message: 'Can Booking access your location?',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        console.log('granted', granted);
        if (granted === 'granted') {
          return true;
        } else {
          return false;
        }
      } catch (err) {
        return false;
      }
    };

    (async () => {
      const result = await requestLocationPermission();

      if (result) {
        Geolocation.getCurrentPosition(
          async position => {
            const {latitude, longitude} = position.coords;
            let res = await axios.get(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`,
              {headers: {'Content-type': 'application/json'}},
            );

            console.log({res: res.data});
            setLocation(`${res.data.city}  ${res.data.countryName}`);
          },
          error => {
            // See error code charts below.
            console.log(error.code, error.message);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      }
    })();
  }, []);

  return (
    <View style={{marginTop: '5%'}}>
      <View style={styles.sub_container}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            setIsOpen(true);
          }}>
          <EvilIcon name="navicon" size={30} color="black" />
        </TouchableOpacity>
        {/* {location !== '' && ( */}
        <View style={styles.location_container}>
          <EvilIcon name="location" size={24} color="black" />
          <Text>{location}</Text>
        </View>
        {/* )} */}

        <View style={styles.search_container}>
          <TouchableOpacity
            style={styles.search_btn}
            activeOpacity={0.5}
            onPress={handleSearch}>
            <EvilIcon name="search" size={32} color="#326fa8" />
          </TouchableOpacity>
          {/* <View style={styles.center}>
            <Icon name="dots-vertical" size={20} color="black" />
          </View> */}
        </View>
      </View>
      <BottomSheet open={open} handleClose={handleClose} />
    </View>
  );
};
export default Header;
const styles = StyleSheet.create({
  sub_container: {
    width: '90%',
    marginTop: '3%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  location_container: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'center',
  },
  search_container: {flexDirection: 'row', right: 0, position: 'absolute'},
  search_btn: {
    width: 34,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 17,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
