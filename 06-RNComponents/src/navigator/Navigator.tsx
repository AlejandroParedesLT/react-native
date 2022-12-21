import {useContext} from 'react';
import { ThemeContext } from '../Context/themeContext/ThemeContext';

import { createStackNavigator } from '@react-navigation/stack';
import { AlertScreen } from '../screens/AlertScreen';
import { Animations101Screen } from '../screens/Animations101Screen';
import { Animations102Screen } from '../screens/Animations102Screen';
import { HomeScreen } from '../screens/HomeScreen';
import { ModalScreen } from '../screens/ModalScreen';
import { PulltoRefreshScreen } from '../screens/PulltoRefreshScreen';
import { SectionListScreen } from '../screens/SectionListScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { SwitchScreen } from '../screens/SwitchScreen';
import { TextInputScreen } from '../screens/TextInputScreen';
import { InfiniteScrollScreen } from '../screens/InfiniteScrollScreen';
import { SlidesScreen } from '../screens/SlidesScreen';
import { ChangeThemeScreen } from '../screens/ChangeThemeScreen';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

export const Navigator = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <NavigationContainer
          theme={theme}
    >
      <Stack.Navigator
        screenOptions={{headerShown:false}}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="Animations101Screen" component={Animations101Screen} />
        <Stack.Screen name="Animations102Screen" component={Animations102Screen} />
        <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
        <Stack.Screen name="AlertScreen" component={AlertScreen} />
        <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
        <Stack.Screen name="PulltoRefreshScreen" component={PulltoRefreshScreen} />
        <Stack.Screen name="SectionListScreen" component={SectionListScreen} />
        <Stack.Screen name="ModalScreen" component={ModalScreen} />
        <Stack.Screen name="InfiniteScrollScreen" component={InfiniteScrollScreen} />
        <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
        <Stack.Screen name="ChangeThemeScreen" component={ChangeThemeScreen} />
      </Stack.Navigator>    
    </NavigationContainer>
    
  );
}