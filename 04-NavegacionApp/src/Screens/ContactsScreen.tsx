import React, {useContext} from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from '../Theme/appTheme';
import { AuthContext } from '../context/AuthContext';

export const ContactsScreen = () => {
  const {signIn, authState} = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>ContactsScreen</Text>
        {authState.isLoggedIn ?
          null
          : <Button title="SignIn" onPress={signIn}/>
        }
    </View>
  );
};
