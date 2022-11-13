/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Result } from '../interfaces/movieInterface';
import { View, Text, FlatList } from 'react-native';
import { MoviePoster } from './MoviePoster';
import ImageColors from 'react-native-image-colors';

interface Props {
    title?: string;
    movies:Result[];
}

export const HorizontalSlider = ({title, movies}:Props) => {
  return (
    <View
        style={{
            //backgroundColor: 'red',
            height: (title) ? 230 : 210,
        }}>
        { title && <Text style={{fontSize:30, fontWeight: 'bold'}}>{title}</Text>}
        <FlatList
            data={movies}
            renderItem= {
                ({item}:any) => <MoviePoster movie={item} width={120} height={160}
            />}
            initialNumToRender={7}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        />
    </View>
  );
};
