import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Props_Card } from '../interfaces/pokemonInterfaces';
import { styles } from '../theme/appTheme';
import { FadeInImage } from './FadeInImage';
import { useState, useEffect, useRef } from 'react';
import ImageColors from 'react-native-image-colors'
import { useNavigation } from '@react-navigation/native';

export const PokemonCard = ({pokemon}:Props_Card) => {
  const [bgColor, setbgColor] = useState('grey');
  const isMounted = useRef(true);
  const navigator = useNavigation<any>();
  useEffect(() => {
    ImageColors.getColors(pokemon.picture, {fallback:'grey'})
    .then( colors => {
      switch (colors.platform) {
        case 'android':
          setbgColor(colors.dominant || bgColor);
          break;
        case 'ios':
          setbgColor(colors.background || bgColor);
          break;
        default:
          setbgColor(bgColor);
          break;
      }
    });
    return () => {
      isMounted.current = false;
    };
  //}, [bgColor, pokemon.picture]);
  });

  return (
    <TouchableOpacity onPress={() => navigator.navigate('PokemonScreen', {simplePokemon:pokemon, color:bgColor})}>
      <View style={{...styles.cardContainer, backgroundColor:bgColor}}>
          <Text style={styles.pokemonName}>{pokemon.name}</Text>
          {/*<Image
          source={{uri:item.picture}}
          style={{width:100,height:100}}
          />*/}
          <View style={styles.pokebolaContainer}>
            <Image
              source={require('../assets/pokebola-blanca.png')}
              style={styles.pokebola}
            />
          </View>
          {<FadeInImage
            uri={pokemon.picture}
            style={styles.pokemonImage}
          />}
      </View>
    </TouchableOpacity>
  );
};
