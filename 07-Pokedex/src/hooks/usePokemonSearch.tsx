/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import { pokemonApi } from '../api/pokemonAPI';
import { PokemonPaginatedResponse, Result, SimplePokemon } from '../interfaces/pokemonInterfaces';

export const usePokemonSearch = () => {
    const [isFetching, setIsFetching] = useState(true);
    const [simplePokemonList, setsimplePokemonList] = useState<SimplePokemon[]>([]);

    const loadPokemons = async () => {
        const resp = await pokemonApi.get<PokemonPaginatedResponse>('https://pokeapi.co/api/v2/pokemon?limit=1200');
        mapPokemonList(resp.data.results);
    };
    const mapPokemonList = (pokemonList: Result[]) => {
        //pokemonList.forEach(poke=>console.log(poke.name) );
        const newPokemonList: SimplePokemon[] = pokemonList.map(({name, url}) => {
            const urlPast = url.split('/');
            const id = urlPast[urlPast.length - 2];
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
            return {
                id,
                picture,
                name,
            };
        });
        setsimplePokemonList(newPokemonList);
        setIsFetching(false);
    };
    useEffect(() => {
      loadPokemons();
    }, [loadPokemons]);

    return {simplePokemonList, isFetching, loadPokemons};
};
