import React from 'react'
import { Text, View, Button } from 'react-native';
import { styles } from '../Theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any>{};

export const Pagina3Screen = ({navigation}:Props) => {
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}> Pagina1 Screen</Text>
        <Button
          title='Regresar'
          onPress={()=>navigation.pop()}
        />
        <Button
          title='Ir al Home'
          onPress={()=>navigation.popToTop()}
        />
    </View>
  );
};
