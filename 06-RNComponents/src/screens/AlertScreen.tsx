import React from 'react'
import { View, Button, Alert } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';

export const AlertScreen = () => {
    const showAlert = () => {
        Alert.alert(
            "Error in input",
            "Ganamovil ",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            {
                cancelable:true
            }
        );
    }
    return (
        <View>
            <HeaderTitle title={'Alerts'}/>
            <Button 
                title='Alert'
                onPress={showAlert}
            />
        </View>
    )
}
