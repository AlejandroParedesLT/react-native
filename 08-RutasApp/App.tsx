import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { Navigator } from './src/Navigator/Navigator';
import { PermissionProvider } from './src/context/PermissionsContext';
import {enableLatestRenderer} from 'react-native-maps';

enableLatestRenderer();

const AppState = ({children}: any) => {
  return (
    <PermissionProvider>
      {children}
    </PermissionProvider>
  );
};

export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigator />
      </AppState>
    </NavigationContainer>
  );
};
