/* eslint-disable react-hooks/exhaustive-deps */
//import React from 'react'
import { useState, useEffect } from 'react';
import { pokemonApi } from '../api/pokemonAPI';
import { PokemonDetails } from '../interfaces/pokemonInterfaces';

export const usePokemon = (id:string) => {

    const [isLoading, setIsLoading] = useState(true);
    const [pokemon, setpokemon] = useState<PokemonDetails>({} as PokemonDetails);

    const loadPokemon = async() => {
        const resp = await pokemonApi.get<PokemonDetails>(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setpokemon(resp.data);
        setIsLoading(false);
    };
    useEffect(() => {
        try {
            loadPokemon();
        } catch (error){
            console.log(error);
        }
    },[loadPokemon]);
    return {
        isLoading,
        pokemon,
    };
};
