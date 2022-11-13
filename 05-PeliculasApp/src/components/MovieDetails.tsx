/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { Text, View, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Cast } from '../interfaces/CreditsInterface';
import { MovieFull } from '../interfaces/movieInterface';
import { CastItem } from './castItem';

interface Props {
    movieFull: MovieFull,
    cast: Cast[]
}

export const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <View style={{marginHorizontal:20}}>
        {/* Detalles */}
        <View style={{flexDirection: 'row'}}>
            <Icon name="star-half-outline" size={15} color="#000" />
            <Text> {new Intl.NumberFormat('de-DE', { maximumFractionDigits: 1}).format(movieFull.vote_average)}</Text>
            <Text> - {new Intl.NumberFormat('de-DE').format(movieFull.vote_count)} Votos</Text>
            <Text style={{marginLeft: 5}}> -{movieFull.genres.map(g => g.name).join(', ')}</Text>
        </View>

        <Text style={{fontSize:20, fontWeight:'bold', marginTop:10}}> Historia </Text>
        <Text style={{fontSize:16}}> {movieFull.overview} </Text>
        <Text style={{fontSize:20, fontWeight:'bold', marginTop:10}}> Presupuesto </Text>
        <Text style={{fontSize:16, paddingBottom:20}}> {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(movieFull.budget)} </Text>

        {/*Estilos <castItem actor={cast[0]} />*/}
        <Text style={{fontSize:20, fontWeight:'bold', marginTop:10}}> Actores </Text>
        <FlatList
            data={cast}
            keyExtractor={(item)=>item.id.toString()}
            renderItem={({item})=><CastItem actor={item}/>}
            horizontal={true}
        />
    </View>
  );
};
