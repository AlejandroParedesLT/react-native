import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../Screens/Tab1Screen';
//import { Tab2Screen } from '../Screens/Tab2Screen';
//import { Tab3Screen } from '../Screens/Tab3Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../Theme/appTheme';
import { Platform } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TopTabNavigator } from './TopTabNavigator';



export const Tabs = () => {
  return Platform.OS === 'ios'
      ? <TabsIOS/>
      : <TabsAndroid/>;
};

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle:{
            fontSize:15,
        },
        tabBarIcon:({color}) => {
            let iconName:string='';
            switch (route.name){
                case 'Tab1Screen':
                  iconName = 'american-football-outline';
                break;
                case 'Tab2Screen':
                  iconName = 'aperture-outline';
                break;
                case 'StackNavigator':
                  return <Icon name="apps-outline" size={25} color={color}/>;
            }
            return <Icon name={iconName} size={25} color={color}/>;
        },
      })}
    >
     {/*<BottomTabAndroid.Screen name="Tab1Screen" options={{title:'Tab1', tabBarIcon:(props)=><Text >T1</Text>}} component={Tab1Screen} />*/}
     <BottomTabAndroid.Screen name="Tab1Screen" options={{title:'Tab1'}} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="Tab2Screen" options={{title:'Tab2'}} component={TopTabNavigator} />
      <BottomTabAndroid.Screen name="StackNavigator" options={{title:'Tab3'}} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}

const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
    screenOptions={({route}) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle:{
            fontSize:15,
        },
        tabBarIcon:({color}) => {
          let iconName:string='';
          switch (route.name){
              case 'Tab1Screen':
                iconName = 'american-football-outline';
              break;
              case 'Tab2Screen':
                iconName = 'aperture-outline';
              break;
              case 'StackNavigator':
                return <Icon name="apps-outline" size={25} color={color}/>;
          }
          return <Icon name={iconName} size={25} color={color}/>;
        },
      })}
    >
      {/*<Tab.Screen name="Tab1Screen" options={{title:'Tab1', tabBarIcon:(props)=><Text >T1</Text>}} component={Tab1Screen} />*/}
      <BottomTabIOS.Screen name="Tab1Screen" options={{title:'Tab1'}} component={Tab1Screen} />
      <BottomTabIOS.Screen name="TopTabNavigator" options={{title:'Tab2'}} component={TopTabNavigator} />
      <BottomTabIOS.Screen name="StackNavigator" options={{title:'Tab3'}} component={StackNavigator} />
    </BottomTabIOS.Navigator>
  );
}