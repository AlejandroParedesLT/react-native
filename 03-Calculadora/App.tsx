import React from 'react'
import { SafeAreaView } from 'react-native'
import { CalculadoraScreen } from './src/Screens/CalculadoraScreen';
import { styles } from './src/Theme/appTheme';

export const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <CalculadoraScreen/>
    </SafeAreaView>
  )
}
