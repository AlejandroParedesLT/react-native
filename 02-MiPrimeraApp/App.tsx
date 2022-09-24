import React from 'react'
import { SafeAreaView } from 'react-native';
//import { BoxObjectModel } from './src/screens/BoxObjectModel';
//import { ContadorScreen } from './src/screens/ContadorScreen';
//import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
//import { DimensionesScreen } from './src/screens/DimensionesScreen';
import { PositionScreen } from './src/screens/PositionScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      {/*<HolaMundoScreen  />*/}
      {/*<ContadorScreen/>*/}
      {/*<BoxObjectModel/>*/}
      {/*<DimensionesScreen/>*/}
      <PositionScreen/>
    </SafeAreaView>
  );
};
