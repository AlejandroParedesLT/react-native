import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    container2: {
        ...StyleSheet.absoluteFillObject,
        //height: 400,
        //width: 400,
        flex:1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
    ...StyleSheet.absoluteFillObject,
    },
    blackbutton:{
        zIndex: 9999,
        height:50,
        width:50,
        backgroundColor:'gray',
        borderRadius:100,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        shadowColor:'black',
        shadowOffset:{
            width:0,
            height:3,
        },
        shadowOpacity:0.27,
        shadowRadius:4.65,
        elevation:6,
    },
});
