import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text } from 'react-native';
import { styles, colores } from '../Theme/appTheme';
import { TouchableIcon } from '../Components/TouchableIcon';

export const Tab1Screen = () => {
  return (
    <View style={ styles.globalMargin}>
        <Text style={ styles.title}>
          <TouchableIcon iconName='airplane-outline'/>
          <TouchableIcon iconName='attach-outline'/>
        </Text>
    </View>
  );
};
