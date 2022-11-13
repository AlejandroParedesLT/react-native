import React from 'react'
import { Text, View, Button } from 'react-native';
import { styles } from '../Theme/appTheme';
import {useContext} from 'react';
import { AuthContext } from '../context/AuthContext';

export const AlbumsScreen = () => {
  const {logout, authState:{isLoggedIn}} = useContext(AuthContext)
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>AlbumsScreen</Text>
        {
          isLoggedIn && (
            <Button
              title="LogOut"
              onPress={logout}
            />
          )
        }
    </View>
  );
};
