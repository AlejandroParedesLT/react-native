/* eslint-disable react-native/no-inline-styles */
import React, { PureComponent } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Result } from '../interfaces/movieInterface';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  movie:Result;
  height?: number;
  width?: number;
}

export const MoviePoster = ({movie, height=420, width=300}:Props)  => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const navigation = useNavigation();
  //console.log(movie.poster_path);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailScreen', movie)}
      activeOpacity={0.8}
      style={{
        width,
        height,
        marginHorizontal: 5,
        //backgroundColor:'red',
      }}>
      <View style={styles.ImageContainer}>
        <Image
          source={{uri}}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    flex:1,
    borderRadius:10,
  },
  ImageContainer:{
    flex:1,
    shadowColor: "#000",
    borderRadius:18,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.9,
    shadowRadius: 6.27,
    elevation: 20,
  },
});
