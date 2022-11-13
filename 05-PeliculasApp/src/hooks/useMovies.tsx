import { useEffect, useState } from 'react';
import movieDB from '../api/MovieDB';
import { MovieDBResponse, Result } from '../interfaces/movieInterface';

interface MoviesState {
    nowPlaying: Result[],
    popular: Result[],
    upcoming: Result[],
    top_rated: Result[],
}

export const useMovies = () => {

    const [isLoading, setisLoading] = useState(true);
    //const [peliculaEnCine, setpeliculaEnCine] = useState<Result[]>([])
    //const [peliculaPopulares, setpeliculaPopulares] = useState<Result[]>([])
    //const [peliculaUpcoming, setpeliculaUpcoming] = useState<Result[]>([])
    const [moviesState, setmoviesState] = useState<MoviesState>({
        nowPlaying: [],
        popular: [],
        upcoming: [],
        top_rated: [],
    });

    const getMovies = async () => {
        const nowPlayingPromise =  movieDB.get<MovieDBResponse>('/now_playing');
        const popularPromise =  movieDB.get<MovieDBResponse>('/popular');
        const upcomingPromise =  movieDB.get<MovieDBResponse>('/upcoming');
        const topRated =  movieDB.get<MovieDBResponse>('/top_rated');

        //setpeliculaEnCine(respNowPlaying.data.results);
        //setpeliculaPopulares(respPopular.data.results);
        //setpeliculaUpcoming(respUpcoming.data.results);

        const response = await Promise.all([nowPlayingPromise, popularPromise, upcomingPromise, topRated]);
        setmoviesState({
            nowPlaying:response[0].data.results,
            popular:response[0].data.results,
            upcoming:response[0].data.results,
            top_rated:response[0].data.results,
        })
        setisLoading(false);
    };


    useEffect(() => {
        //now_playing
        getMovies();
    },);

    return {
        //peliculaEnCine,
        //peliculaPopulares,
        //peliculaUpcoming,
        ...moviesState,
        isLoading,
    };
};
