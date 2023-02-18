/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { PropsPokemonScreen } from '../interfaces/pokemonInterfaces';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon  from 'react-native-vector-icons/Ionicons';
import { usePokemon } from '../hooks/usePokemon';
import { PokemonDetailsText } from '../components/PokemonDetailsText';

export const PokemonScreen = ({navigation, route}: PropsPokemonScreen) => {
  const {top} = useSafeAreaInsets();
  const {simplePokemon, color} = route.params;
  const {isLoading, pokemon} = usePokemon(simplePokemon.id);
  return (
    <View style={{flex:1}}>
      <View style={{
        ...styles.headerContainer,
        backgroundColor:color,
      }}>
        <TouchableOpacity
          onPress={() => navigation.pop()}
          style={{
            ...styles.backButton,
            top:top + 5,
          }}
        >
          <Icon
            name="arrow-back-outline"
            color={'white'}
            size={35}
          />
        </TouchableOpacity>
        <Image
          source={require('../assets/pokebola-blanca.png')}
          style={styles.bigPokeball}
        />
        <FadeInImage
          uri={simplePokemon.picture}
          style={styles.pokemonImageDet}
        />
      </View>
      <Text style={{
        ...styles.title,
        ...styles.globalMargin,
        top:top + 20,
        marginBottom:top + 20,
      }}>
        {simplePokemon.name}
      </Text>

      {/* Detalles y Loading*/}

      {
        isLoading
        ? (
          <View style={styles.loadingIndicador}>
            <ActivityIndicator
              color={color}
              size={50}/>
          </View>
        )
        : <PokemonDetailsText pokemon={pokemon}/>
      }
    </View>
  );
};
