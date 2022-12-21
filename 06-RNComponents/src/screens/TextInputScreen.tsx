import React, {useContext} from 'react'
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { HeaderTitle } from '../components/HeaderTitle';
import { useForm } from '../hooks/useForm';
import { CustomSwitch } from '../components/customSwitch';
import { useState } from 'react';
import { ThemeContext } from '../Context/themeContext/ThemeContext';

export const TextInputScreen = () => {
    const {theme} = useContext(ThemeContext)
    const {form, onChange, isSubscribed} = useForm({
        name: '',
        email: '',
        phone: '',
        isSubscribed: false,
    })
    
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.globalMargin}>
                        <HeaderTitle title='Text Input'/>
                        <TextInput 
                            style={{...styles.input, color:theme.colors.text, borderColor: theme.colors.border ,}}
                            placeholder='Ingrese su nombre'
                            autoCorrect={false}
                            autoCapitalize='words'
                            placeholderTextColor={theme.colors.text}
                            onChangeText={(value) => onChange(value, 'name')}
                        />
                        <TextInput 
                            style={{...styles.input, color:theme.colors.text, borderColor: theme.colors.border ,}}
                            placeholder='Ingrese su email'
                            autoCorrect={false}
                            autoCapitalize='none'
                            placeholderTextColor={theme.colors.text}
                            onChangeText={(value) => onChange(value, 'email')}
                            keyboardType="email-address"
                        />
                        <TextInput 
                            style={{...styles.input, color:theme.colors.text, borderColor: theme.colors.border ,}}
                            placeholder='Ingrese su telefono'
                            autoCorrect={false}
                            placeholderTextColor={theme.colors.text}
                            onChangeText={(value) => onChange(value, 'phone')}
                            keyboardType="phone-pad"
                        />
                        <View style={styles.lists_Artificial}>
                            <Text style={{color:theme.colors.text}}>Subscribirse</Text>
                            <CustomSwitch isOn={isSubscribed} on_Change={(value)=>onChange(value,'isSubscribed')}/>
                        </View>
                        {/*<TextInput
                            style={styles.input}
                            onChangeText={onChangeNumber}
                            value={number}
                            placeholder="useless placeholder"
                            keyboardType="numeric"
                        />*/}
                        <HeaderTitle title={JSON.stringify(form, null, 3)} />
                        <View style={{height: 100}}/>
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
            
        </KeyboardAvoidingView>
    );
};
