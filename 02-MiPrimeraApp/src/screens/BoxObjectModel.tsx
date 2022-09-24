import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const BoxObjectModel = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>BoxObject model</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'red',
    },
    title:{
        paddingHorizontal:100,
        paddingVertical:20,
        fontSize:20,
        marginHorizontal:50,
        //backgroundColor:'red',
        width:150,
        borderWidth: 10,
    },
});
