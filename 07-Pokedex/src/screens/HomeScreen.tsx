import React from 'react';
import { FlatList, Image, Text, ActivityIndicator, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
//import Icon from 'react-native-vector-icons/Ionicons';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { styles } from '../theme/appTheme';
//import { FadeInImage } from '../components/FadeInImage';
import { PokemonCard } from '../components/PokemonCard';
//import { useNavigation } from '@react-navigation/native';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {simplePokemonList, loadPokemons} = usePokemonPaginated();
  console.log(simplePokemonList);
  return (
    <>
        <Image
          source={require('../assets/pokebola.png')}
          style={styles.pokebolaBG}
        />
        <View style={{alignItems:'center'}}>
          <FlatList
            data={simplePokemonList}
            keyExtractor = {(pokemon: { id: any; })=>pokemon.id}
            //renderItem={({item})=><Text>{item.name}</Text>}
            numColumns={3}
            ListHeaderComponent={(
              <Text style={{
                ...styles.title,
                ...styles.globalMargin,
                top:top + 20,
                marginBottom:top + 20,
              }}>Pokedex</Text>
            )}
            renderItem={({item})=>(
              <PokemonCard pokemon={item}/>
            )}
            //ItemSeparatorComponent={() => <View style={{height: 10}} />}
            //InfiniteScroll
            onEndReached={loadPokemons}
            onEndReachedThreshold={0.4}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={
              <ActivityIndicator
                style={{ height:100 }}
                color='gray'
                size={20}
              />
            }
          />
        </View>
        {/*<Icon
            name="star-outline"
            color="red"
            size={200}
        />*/}
    </>
  );
};
