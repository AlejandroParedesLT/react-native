/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState, useContext} from 'react';
import { Text, View, Button, ActivityIndicator, Dimensions, FlatList, ScrollView } from 'react-native';
//import { Navigation } from '../navigation/Navigation';
//import { useNavigation } from '@react-navigation/native';
//import movieDB from '../api/MovieDB';
//import { MovieDBNowPlaying } from '../interfaces/movieInterface';
import Carousel from 'react-native-snap-carousel';
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';
//import ImageColors from 'react-native-image-colors'
import { getPosterColors } from '../helpers/getColores';
import { GradientContext } from '../context/GradientContext';

const {width:windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {

    const {nowPlaying,popular, upcoming, top_rated, isLoading} = useMovies();
    const {top} = useSafeAreaInsets();
    const {setMainColors} = useContext(GradientContext);

    const getPosterColor = async (index:number) => {
        const movie = nowPlaying[index];
        const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        const [primary = 'green', secondary = 'orange'] = await getPosterColors(uri);
        //console.log({primary, secondary});
        setMainColors({primary, secondary});
    };
    useEffect(() => {
      //if (nowPlaying.length > 0){
        //getImageColors(0);
      //}
      if (nowPlaying.length > 0 ){
        getPosterColor(0);
      }
    }, [ nowPlaying ]);



    if (isLoading){
        return (
            <View style={{ flex:2, justifyContent:'center', alignContent:'center' }}>
                <ActivityIndicator color="red" size={100}/>
            </View>
        );
    }

    return (
        <GradientBackground>
            <ScrollView>
                <View style={{marginTop: top + 20}}>
                    {/*<Button
                        title="ir detalle"
                        onPress={() => navigation.navigate('DetailScreen')}
                    />*/}
                    {/*Principal*/}
                    <View style={{height : 440}}>
                        <Carousel
                            data={nowPlaying}
                            renderItem={({item}: any)=><MoviePoster  movie={item}/>}
                            sliderWidth={windowWidth}
                            itemWidth={300}
                            onSnapToItem={(index) => getPosterColor(index)}
                        />
                    </View>
                    {/*Peliculas populares*/}
                    {/*<HorizontalSlider title={'Peliculas en cine'} movies={peliculaEnCine} />*/}
                    <HorizontalSlider title={'Popular'} movies={popular} />
                    <HorizontalSlider title={'Upcoming'} movies={upcoming} />
                    <HorizontalSlider title={'Top Rated'} movies={top_rated} />
                </View>
            </ScrollView>
        </GradientBackground>
    );
};
