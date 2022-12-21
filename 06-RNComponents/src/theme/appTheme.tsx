import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal:20,
    },
    title:{
        fontSize: 35,
        fontWeight: 'bold',
    },
    Flatlist_container:{
        flexDirection:'row'
    },
    Flatlist_itemText:{
        marginLeft:5
    },
    Flatlist_Icon:{
        flexDirection: 'row-reverse'
    },
    purpleBox : {
        backgroundColor: '#5856D6',
        width: 150,
        height:150,
    },
    container : {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box_draggable: {
        backgroundColor: "#61dafb",
        width: 80,
        height: 80,
        borderRadius: 4,
    },
    lists_Artificial: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    input: {
        height: 40,
        //margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
    },
    TextItem: {
        backgroundColor:'green',
        height:150
    },
    title_slidesscreen:{
        fontSize:30,
        fontWeight:'bold',
        color:'green'
    },
    subtitle_slidesscreen:{
        fontSize:16
    },
    buttonChangeTheme:{
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
        height:100,
        width:200,
    }
})