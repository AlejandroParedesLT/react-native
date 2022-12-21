import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
//import { Icon } from 'react-native-vector-icons/Icon';
import Icon from 'react-native-vector-icons/Ionicons';
import { menuItem } from '../interfaces/appInterfaces';
import { styles } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/core';
import { useTheme } from '@react-navigation/native';
import {useContext} from 'react';
import { ThemeContext } from '../Context/themeContext/ThemeContext';

interface Props {
    menuItem:menuItem,
}

export const FlatListMenuItem = ({menuItem}:Props) => {
    
    const navigation = useNavigation<any>();
    //const {colors} = useTheme();
    const {theme} = useContext(ThemeContext)
    
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate(menuItem.component)}
        >
            <View style={styles.Flatlist_container}>
                <Icon 
                    name={menuItem.icon}
                    color={theme.colors.primary}
                    size={19}
                />
                <Text style={{
                    ...styles.Flatlist_itemText,
                    color:theme.colors.text
                }}
                >{menuItem.name}</Text>
                <View style={{flex:1}}/>
                <Icon 
                    name="chevron-forward-outline"
                    color={theme.colors.primary}
                    size={19}
                />
            </View>
        </TouchableOpacity>
    )
}
