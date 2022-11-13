import React, { useEffect, useRef } from 'react'
import { View, Text } from 'react-native';
import { styles } from '../Theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RouteStackParams } from '../navigator/StackNavigator';
import {useContext} from 'react';
import { AuthContext } from '../context/AuthContext';

/*interface RouterParams{
    id: number,
    nombre: string,
}*/

interface Props extends StackScreenProps<RouteStackParams,'PersonaScreen'>{};

export const PersonaScreen = ({route, navigation}:Props) => {
    const params = route.params;
    const {ChangeName} = useContext(AuthContext);
    const userRef = useRef<string>();
    useEffect(() => {
        navigation.setOptions({
                title:params.nombre,
        });
    },);

    useEffect(() => {
        if (params.nombre !== userRef.current) {
            userRef.current = params.nombre;
            ChangeName(params.nombre);
          }
    },);

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                {JSON.stringify(params, null, 3)}
            </Text>
        </View>
    );
};
