import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { Text, View } from 'react-native';
//import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Navigator } from './src/navigator/Navigator';

export const App = () => {
  return (  
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  )
}
