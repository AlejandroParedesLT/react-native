import { useState, useEffect } from 'react';
import movieDB from '../api/MovieDB';
import { MovieFull } from '../interfaces/movieInterface';
import { CreditsResponse } from '../interfaces/CreditsInterface';
interface MovieDetails {
    isLoading: boolean,
    movieFull?: MovieFull,
    cast: any[],
}

export const useMovieDetails = (movieId: number) => {
    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: [],
    });
    const getMovieDetails = async () => {
        const movieDetailPromise = movieDB.get<MovieFull>(`/${movieId}`);
        const castPromise = movieDB.get<CreditsResponse>(`/${movieId}/credits`);
        const [movieDetailResp, castPromiseResp] = await Promise.all([movieDetailPromise, castPromise]);
        setState({
            isLoading: false,
            movieFull: movieDetailResp.data,
            cast: castPromiseResp.data.cast,
        });
    };
    useEffect(() => {
      getMovieDetails();
    },);
    return {
        ...state,
    };
};
