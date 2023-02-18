/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { PokemonDetails } from '../interfaces/pokemonInterfaces';
import { styles } from '../theme/appTheme';
import { FadeInImage } from './FadeInImage';

export const PokemonDetailsText = (pokemon:PokemonDetails) => {
  return (
    <ScrollView style={{...StyleSheet.absoluteFillObject}} showsHorizontalScrollIndicator={false}>
      <View style={{
        ...styles.globalMargin,
        marginTop:400,
      }}>
          <Text style={{...styles.title, marginBottom:10}}>Types</Text>
          <View style={{flexDirection:'row'}}>
          {
            pokemon.types && pokemon.types.map(({type}):any=>{
              <Text
                key={type.name}
                style={styles.regularDetails}
              >
                {type.name}
              </Text>;
            })
          }
          </View>

          {/* Peso */}
          <Text style={styles.title}>Peso</Text>
          <Text style={styles.regularDetails}>{pokemon.weight} kg</Text>
      </View>

      <View style={{
        marginHorizontal:20,
        marginTop:20,
      }}>
        <Text style={styles.title}>Sprites</Text>
      </View>

      {pokemon.sprites && <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <FadeInImage
          uri={pokemon.sprites.front_default}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.back_default}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.front_shiny}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.back_shiny}
          style={styles.basicSprite}
        />
      </ScrollView>}

      {/* Base Abilities */}
      <View style={{
        ...styles.globalMargin,
      }}>
          <Text style={styles.title}>Base Skills</Text>
          <View style={{flexDirection:'row'}}>
          {
            pokemon.abilities && pokemon.abilities.map(({ability}):any=>{
              <Text
                key={ability.name}
                style={styles.regularDetails}
              >
                {ability.name}
              </Text>;
            })
          }
          </View>
      </View>

      {/*Moves */}
      <View style={{
        ...styles.globalMargin,
      }}>
          <Text style={styles.title}>Movimientos</Text>
          <View style={{flexWrap:'wrap', flexDirection:'row'}}>
          {
            pokemon.moves && pokemon.moves.map(({move}):any=>{
              <Text
                key={move.name}
                style={styles.regularDetails}
              >
                {move.name}
              </Text>;
            })
          }
          </View>
      </View>
      {/* Stats */}
      <View style={{
        ...styles.globalMargin,
      }}>
          <Text style={styles.title}>Stats</Text>
          <View style={{flexWrap:'wrap', flexDirection:'row'}}>
          {
            pokemon.stats && pokemon.stats.map((stat, id):any=>{
              <View
                key={stat.stat.name + id}
                style={{flexDirection:'row'}}
              >
                <Text
                  style={{...styles.regularDetails, width:150}}
                >
                  {stat.stat.name}
                </Text>;
                <Text
                  style={{...styles.regularDetails, fontWeight:'bold'}}
                >
                  {stat.base_stat}
                </Text>;
              </View>;
            })
          }
          </View>
      </View>
    </ScrollView>
  );
};
