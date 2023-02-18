import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal:20,
    },
    pokebolaBG:{
        position:'absolute',
        width:300,
        height:300,
        top:-100,
        right:-100,
        opacity:0.2,
    },
    title:{
        fontSize:35,
        fontWeight:'bold',
    },
    cardContainer:{
        marginHorizontal:8,
        marginVertical:10,
        //backgroundColor:'gray',
        borderRadius:10,
        //overflow: 'hidden',
        height:120,
        width:120,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    pokemonName:{
        fontSize:20,
        fontWeight:'bold',
        top:5,
        left:10,
    },
    pokebola:{
        width:60,
        height:60,
        position:'absolute',
        bottom:-20,
        right:-20,
        opacity:0.5,
    },
    pokemonImage:{
        width:100,
        height:100,
        position:'absolute',
        right:-5,
        bottom:-5,
    },
    pokebolaContainer:{
        width:60,
        height:60,
        position:'absolute',
        bottom:0,
        right:0,
        borderRadius:10,
        overflow:'hidden',
        //opacity:0.5,
    },
    headerContainer:{
        height:370,
        zIndex:999,
        alignItems:'center',
        borderBottomRightRadius:1000,
        borderBottomLeftRadius:1000,
    },
    backButton:{
        position:'absolute',
        left:20,
    },
    pokemonImageDet:{
        width:250,
        height:250,
        position:'absolute',
        bottom:-15,
    },
    bigPokeball:{
        width:250,
        height:250,
        bottom:-20,
        opacity:0.5,
    },
    loadingIndicador:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    regularDetails:{
        fontSize:17,
    },
    basicSprite:{
        width:100,
        height:100,
    },
    textBackground:{
        backgroundColor:'#F3F1F3',
        borderRadius:50,
        height:40,
        paddingHorizontal:20,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    textInput :{
        flex:1,
        fontSize:18,
    },
    search_ActivityContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
});
