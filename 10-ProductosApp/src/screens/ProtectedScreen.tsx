import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import { styles } from '../styles/styles';
import { AuthContext } from '../context/AuthContext';

export const ProtectedScreen = () => {
  const { user, token, logOut } = useContext(AuthContext);
  return (
    <View style={styles.container2}>
        <Text style={styles.titleProtected}> Protected </Text>
        <Button
          title="logout"
          color={'#Ff7200'}
          onPress={logOut}
        />
        <Text>
          {JSON.stringify(user, null, 5)}
        </Text>
    </View>
  );
};
