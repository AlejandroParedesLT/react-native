import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Props {
    title:string,
    onPress:()=>void,
    position?:'br'|'bl';
}

export const Fab = ({title, onPress, position = 'br'}:Props) => {
    return (
        <TouchableOpacity
            style={[
                styles.fabLocation,
                (position === 'br') ? styles.right : styles.left,
            ]}
            onPress={onPress}
        >
            <View style={styles.fab}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    fabLocation:{
        position:'absolute',
        bottom :10,
    },
    left:{
        left:10,
    },
    right:{
        right:10,
    },
    fab:{
        backgroundColor:'#5856D6',
        borderRadius:100,
        width:60,
        height:60,
        justifyContent:'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,

        elevation: 17,
    },
    text:{
        color:'white',
        fontSize:25,
        fontWeight:'bold',
        alignSelf:'center',
    },
});
