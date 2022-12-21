import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

export const HomeScreen = () => {
  return (
    <View>
        <Text>Pokemon Screen</Text>
        <Icon 
            name='star-outline'
            color='red'
            size={200}
        />
    </View>
  )
}
