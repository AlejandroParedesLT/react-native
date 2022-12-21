import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme, Theme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Navigator } from './src/navigator/Navigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeContext, ThemeProvider } from './src/Context/themeContext/ThemeContext';
import { lightTheme } from './src/Context/themeContext/ThemeReducer';

const Stack = createStackNavigator();

/*
const customTheme :Theme = {
  dark:true,
  colors:{
    ...DefaultTheme.colors
  }
}
*/

const AppState = ({children}:any) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

export const App = () => {
  return (
    <SafeAreaProvider>
      <AppState>
          <Navigator />
      </AppState>
    </SafeAreaProvider>
  );
};
