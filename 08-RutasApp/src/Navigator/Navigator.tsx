import { createStackNavigator } from '@react-navigation/stack';
import { useContext } from 'react';
import { MapScreen } from '../Screens/MapScreen';
import { PermissionsScreen } from '../Screens/PermissionsScreen';
import { PermissionsContext } from '../context/PermissionsContext';
import { LoadingScreen } from '../Screens/LoadingScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
  const {permissions} = useContext(PermissionsContext);
  if (permissions.locationStatus === 'unavailable'){
    return <LoadingScreen />;
  }
  return (
    <Stack.Navigator
        screenOptions=
        {{
            headerShown:false,
            cardStyle:{backgroundColor:'white'}
        }}
    >
      {
        (permissions.locationStatus === 'granted')
        ? <Stack.Screen name="MapScreen" component={MapScreen} />
        : <Stack.Screen name="PermissionsScreen" component={PermissionsScreen} />
      }
    </Stack.Navigator>
  );
}