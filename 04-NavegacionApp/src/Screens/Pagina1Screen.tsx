/* eslint-disable react-native/no-inline-styles */
//import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { styles } from '../Theme/appTheme';
import { DrawerScreenProps } from '@react-navigation/drawer';
//import { useEffect } from 'react';

//interface Props extends StackScreenProps<any, any>{}
interface Props extends DrawerScreenProps<any, any>{}

export const Pagina1Screen = ({ navigation }:Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return (
          <Button
          title="Menú"
          onPress={() => navigation.toggleDrawer()}
          />
        );
      },
    });
  },);
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}> Pagina1 Screen</Text>
        <Button
            title="Ir a página2"
            onPress={() => navigation.navigate('Pagina2Screen')}
        />
        {/*<Button
            title="Ir a persona"
            onPress={() => navigation.navigate('PersonaScreen')}
        />*/}
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity
            style={styles.botonGrande}
            onPress={() => navigation.navigate('PersonaScreen',{
              id:1,
              nombre:'Pedro',
            })}
          >
            <Text style={styles.botonGrandeTexto}> Pedro</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botonGrande}
            onPress={() => navigation.navigate('PersonaScreen',{
              id:1,
              nombre:'Maria',
            })}
          >
            <Text style={styles.botonGrandeTexto}> Maria</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};
