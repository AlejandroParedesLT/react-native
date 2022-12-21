import React, {useContext} from 'react'
import { View } from 'react-native';
import { ThemeContext } from '../Context/themeContext/ThemeContext';

export const ItemSeparator = () => {
  const {theme} = useContext(ThemeContext)  ;
  return (
    <View 
      style={{
        borderBottomWidth:1, 
        opacity:0.5,
        marginVertical:8,
        height:2,
        backgroundColor:theme.colors.border
      }}
    />
  )
}