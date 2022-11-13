import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { Cast } from '../interfaces/CreditsInterface';

interface Props {
    actor: Cast
}

export const CastItem = ({actor}: Props) => {
    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
    return (
        <View style={styles.Container}>
            {
                actor.profile_path && (
                    <View style={styles.ImageContainer}>
                        <Image
                            source = {{uri}}
                            //style = {styles.posterImage}
                            style = {styles.posterImage}
                        />
                    </View>
                )
            }
            <View style={styles.actorInfo}>
                <Text style={styles.title}>{actor.name}</Text>
                <Text style={styles.subtitle}>{actor.character}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    Container : {
        flexDirection:'column',
        shadowColor: '#000',
        backgroundColor: 'white',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.1,
        shadowRadius: 0.27,
        elevation: 9,
        borderRadius:5,
        //height:40,
        //width:30,
        marginBottom:20,
        marginLeft:10,
    },
    ImageContainer:{
        //borderRadius:30,
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        marginBottom:5,
    },
    posterImage : {
        //flex:1,
        width:90,
        height:100,
        borderRadius:10,
        display:'flex',
        marginLeft:'auto',
        marginRight:'auto',
        //display: block,
        //margin-left: auto,
        //margin-right: auto,
        //borderRadius:10,
        //marginTop:10,
        //marginLeft:10,
        //marginRight:10,
        //marginBottom:5,
    },
    title:{
        fontSize: 10,
        opacity: 0.8,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    actorInfo : {
        marginTop:5,
        marginLeft:10,
        marginRight:10,
        marginBottom:10,
    }
  });
