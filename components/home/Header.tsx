import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {NavigationProps} from '../../types/apiTypes';
import {useNavigation} from '@react-navigation/native';
// import * as Location from "expo-location";
import BottomSheet from './BottomSheet';

const Header = () => {
  const {navigate} = useNavigation<NavigationProps>();
  // const [location, setLocation] = React.useState<string>('');
  const handleSearch = () => navigate('Search');
  const [open, setIsOpen] = React.useState(false);
  const handleClose = () => setIsOpen(false);

  // React.useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== "granted") {
  //       return;
  //     }

  //     let { coords } = await Location.getCurrentPositionAsync({});
  //     const { latitude, longitude } = coords;

  //     let response = await Location.reverseGeocodeAsync({
  //       latitude,
  //       longitude,
  //     });
  //     if (response) {
  //       setLocation(`${response[0].city}, ${response[0].country} `);
  //     }
  //   })();
  // }, []);

  const location = 'Kasangati';

  return (
    <View style={{marginTop: '5%'}}>
      <View style={styles.sub_container}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            setIsOpen(true);
          }}>
          <Icon name="align-left" size={30} color="black" />
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
          <View style={styles.center}>
            <EntypoIcon name="dots-three-vertical" size={20} color="black" />
          </View>
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
