import {useEffect, useRef, useState} from 'react';
import { pokemonApi } from '../api/pokemonAPI';
import { PokemonPaginatedResponse, Result, SimplePokemon } from '../interfaces/pokemonInterfaces';

export const usePokemonPaginated = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [simplePokemonList, setsimplePokemonList] = useState<SimplePokemon[]>([]);
    const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const loadPokemons = async () => {
        setIsLoading(true);
        const resp = await pokemonApi.get<PokemonPaginatedResponse>(nextPageUrl.current);
        nextPageUrl.current = resp.data.next;
        mapPokemonList(resp.data.results);
    };
    const mapPokemonList = (pokemonList: Result[]) => {
        //pokemonList.forEach(poke=>console.log(poke.name) );
        const newPokemonList: SimplePokemon[] = pokemonList.map(({name, url}) => {
            const urlPast = url.split('/');
            const id = urlPast[urlPast.length - 2];
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
            return {
                id,
                picture,
                name,
            };
        });
        setsimplePokemonList([...simplePokemonList,...newPokemonList]);
        setIsLoading(false);
    };
    useEffect(() => {
      loadPokemons();
    }, [loadPokemons]);
    return {simplePokemonList, isLoading, loadPokemons};
};
