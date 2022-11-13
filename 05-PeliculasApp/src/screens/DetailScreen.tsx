/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions, ScrollView, ActivityIndicator } from 'react-native';
//import { Result } from '../interfaces/movieInterface';
import { RootStackParams } from '../navigation/Navigation';
//import { MoviePoster } from '../components/MoviePoster';
import Icon from 'react-native-vector-icons/Ionicons';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';
import { TouchableOpacity } from 'react-native-gesture-handler';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

export const DetailScreen = ({route, navigation}:Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const {isLoading, cast, movieFull} = useMovieDetails(movie.id);

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image
              source = {{uri}}
              style = {styles.posterImage}
          />
        </View>
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.title}>{movie.original_title}</Text>
        <Text style={styles.subtitle}>{movie.title}</Text>
      </View>

      <View style={{marginTop:20}}>
        {/*<Icon name="star-half-outline" size={30} color="#000" />*/}
        {isLoading
          ? <ActivityIndicator size={30} color="grey" style={{marginTop:20}}/>
          : <MovieDetails movieFull={movieFull!} cast={cast}/>
        }
      </View>
      <View style={styles.backButton}>
        <TouchableOpacity onPress={()=>navigation.pop()}>
          <Icon name="arrow-back-outline" size={60} color="white"/>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer : {
    width: '100%',
    height: screenHeight * 0.6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.9,
    shadowRadius: 6.27,
    elevation: 20,
    borderBottomEndRadius:18,
    borderBottomStartRadius:18,
  },
  imageBorder : {
    flex:1,
    borderBottomEndRadius:18,
    borderBottomStartRadius:18,
  },
  posterImage : {
    flex:1,
    position: 'relative',
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop:20,
  },
  title:{
    fontSize: 20,
    opacity: 0.8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 11,
    top:1,
    left:1,
    background: "white",
  },
});
