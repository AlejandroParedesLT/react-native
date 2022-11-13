/* eslint-disable prettier/prettier */
import axios from 'axios';

const movieDB = axios.create({
    timeout: 5000,
    baseURL:'https://api.themoviedb.org/3/movie',
    params:{
        api_key: '0aeb508d515e53f85b3064e83992e291',
        language: 'es-ES',
    },
});

export default movieDB;
