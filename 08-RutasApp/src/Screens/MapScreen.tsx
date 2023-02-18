import React from 'react';
//import Icon from 'react-native-vector-icons/Ionicons';
import { View } from 'react-native';
import { Map } from '../components/Map';
import { styles } from '../styles/styles';

export const MapScreen = () => {
  return (
    <View style={styles.container2}>
      {/*<Icon name="star-outline" size={30} color={'blue'}/>*/}
      <Map />
    </View>
  );
};
