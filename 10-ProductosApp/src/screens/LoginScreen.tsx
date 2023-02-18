import React, { useContext, useEffect } from 'react';
import { Background } from '../components/Background';
import { WhiteLogo } from '../components/WhiteLogo';
import { styles } from '../styles/styles';
import { KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View, Keyboard, Alert } from 'react-native';
import { useForm } from '../hooks/useForm';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthContext } from '../context/AuthContext';

interface Props extends StackScreenProps<any, any> {}

export const LoginScreen = ({navigation}:Props) => {
  const {signIn, errorMessage, removeError} = useContext(AuthContext);
  const {email, password, onChange} = useForm({
    email: '',
    password:'',
  });
  useEffect(() => {
    if (errorMessage.length === 0) {return;}
    else {
      Alert.alert(
        'LogIn Incorrecto',
        errorMessage,
        [
          {
            text:'Ok',
            onPress: removeError,
          },
        ]

      );
    }
  }, [errorMessage, removeError]);

  const onLogin = () => {
    //console.log({email, password});
    signIn({correo:email, password});
    Keyboard.dismiss();
  };

  return (
    <>
      <Background />
      <KeyboardAvoidingView
        style={styles.centeredView}
        behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}
      >
        <WhiteLogo />
        <Text style={styles.title}> LogIn </Text>
        {/*<Text style={styles.title}> Email </Text>*/}
        <View style={{alignItems:'center'}}>
          <TextInput
            style={{...styles.label_input_box, marginTop:30}}
            placeholder="Email"
            keyboardType='email-address'
            placeholderTextColor={'white'}
            onChangeText={(value) => onChange(value, 'email')}
            value={email}
            onSubmitEditing={onLogin}
          />
          <TextInput
            style={styles.label_input_box}
            placeholder="password"
            placeholderTextColor={'white'}
            onChangeText={(value) => onChange(value, 'password')}
            value={password}
            onSubmitEditing={onLogin}
            secureTextEntry
          />
          <TouchableOpacity
            style={{...styles.buttonTouch, marginTop:30}}
            onPress={onLogin}
          >
            <Text style={styles.textButton}>Sign In</Text>
          </TouchableOpacity>

          <Text style={{marginTop:10, color:'white'}}> Or </Text>

          <TouchableOpacity
            style={{...styles.buttonTouch, marginTop:10}}
            onPress={() => navigation.replace('RegisterScreen')}
          >
            <Text style={styles.textButton}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};
