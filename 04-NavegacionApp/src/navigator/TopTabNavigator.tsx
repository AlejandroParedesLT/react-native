import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../Screens/ChatScreen';
import { ContactsScreen } from '../Screens/ContactsScreen';
import { AlbumsScreen } from '../Screens/AlbumsScreen';
import { colores } from '../Theme/appTheme';
//import { Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  return (
    <Tab.Navigator
        screenOptions={({route}) => ({
            tabBarPressColor: colores.primary,
            tabBarShowIcon: true,
            showIcon: true,
            tabBarIndicatorStyle: {
              backgroundColor: colores.primary,
            },
            tabBarStyle: {
                borderTopColor: colores.primary,
                borderTopWidth: 0,
                elevation: 0,
            },
            tabBarIcon: ({color}) => {
                let iconName:string='';
                switch (route.name){
                    case 'Chat':
                      iconName = 'chatbubbles-outline';
                    break;
                    case 'Contacts':
                      iconName = 'people-outline';
                    break;
                    case 'Albums':
                      return <Icon name="albums-outline" size={25} color={color}/>;
                }
                return <Icon name={iconName} size={25} color={color}/>;
            },
        })}
    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
}