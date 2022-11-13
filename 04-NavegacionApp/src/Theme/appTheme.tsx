import { StyleSheet } from "react-native";

export const colores = {
    primary: '#5856D6'
}
export const styles = StyleSheet.create({
    globalMargin:{
        marginHorizontal:20,
    },
    title:{
        fontSize:30,
        marginBottom:10,
    },
    botonGrande:{
        width:100,
        height:100,
        backgroundColor:'blue',
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
    },
    botonGrandeTexto:{
        color:'white',
    },
    avatarContainer:{
        alignItems:'center',
    },
    avatar:{
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    menuContainer:{
        marginVertical:30,
        marginHorizontal: 30,
        alignItems:'center',
    },
    menuTexto:{
        fontSize: 20,
    },
    menuBoton:{
        marginVertical: 10,
    },
});
