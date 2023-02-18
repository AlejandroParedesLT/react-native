/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Platform, StyleProp, ViewStyle } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { useState, useEffect } from 'react';
import { useDebounceValue } from '../hooks/useDebounceValue';

interface Props {
  onDebounce:(value:string) => void;
  style?:StyleProp<ViewStyle>
}

export const SearchInput = ({style, onDebounce}:Props) => {
  const [textValue, setTextValue] = useState('');
  const debouncedValue = useDebounceValue(textValue);
  useEffect(() => {
    onDebounce(debouncedValue);
  }, [debouncedValue, onDebounce]);

  return (
    <View style={{
      //...styles.cardContainer,
      ...style as any,
    }}>
      <View style={styles.textBackground}>
        <TextInput
          placeholder="Buscar pokemón"
          style={{...styles.textInput, top:(Platform.OS === 'ios') ? 0 : 2}}
          autoCapitalize="none"
          autoCorrect={false}
          value = {textValue}
          onChangeText = {setTextValue}
        />
        <Icon
            name="search-outline"
            color="grey"
            size={30}
        />
      </View>
    </View>
  );
};
