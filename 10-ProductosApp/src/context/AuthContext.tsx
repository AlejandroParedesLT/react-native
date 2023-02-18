import React, { createContext, useReducer, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import mernAPI from "../api/mernAPI";
import { LoginData, LogInResponse, RegisterData, Usuario } from '../interfaces/appInterfaces';
import { authReducer, AuthState } from "./AuthReducer";

type AuthContextProps = {
    errorMessage: string,
    token: string | null,
    user:Usuario | null,
    status: 'cheking' | 'authenticated' | 'not-authenticated',
    signUp: (registerData:RegisterData) => void;
    signIn: (loginData: LoginData) => void;
    logOut: () => void;
    removeError: () => void;
}

/*    // Usar para esperar el login
{isLoading
    ? <ActivityIndicator size={30} color="grey" style={{marginTop:20}}/>
    : <MovieDetails movieFull={movieFull!} cast={cast}/>
}
*/

const authInitialState: AuthState = {
    status:'checking',
    token:null,
    user:null,
    errorMessage: '',
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any ) => {
    const [ state, dispatch ] = useReducer(authReducer, authInitialState);

    useEffect(() => {
        checkToken();
    }, []);

    const checkToken = async () => {
        const token = await AsyncStorage.getItem('token')
            //.then( token => {
                //console.log({token});
            //});
        if (!token) {return dispatch({type:'notAuthenticated', payload:''})}
        else {
            const resp = await mernAPI.get('/auth');
            if (resp.status !== 200){
                return dispatch({type: 'notAuthenticated', payload:''});
            } else {
                dispatch(
                    {
                        type:'signUp',
                        payload:{
                            token:resp.data.token,
                            user:resp.data.usuario,
                        },
                    }
                );
            }
        }
    };

    const signIn = async ({correo, password}: LoginData) => {
        try {
            const resp = await mernAPI.post<LogInResponse>('/auth/login', {correo, password});
            dispatch(
                {
                    type:'signUp',
                    payload:{
                        token:resp.data.token,
                        user:resp.data.usuario,
                    },
                }
            );
            await AsyncStorage.setItem('token', resp.data.token);
        } catch (error) {
            console.log(error.response.data);
            dispatch(
                {
                    type:'addError',
                    payload: error.response.data || 'Revisar la información',
                }
            );
        }
    };
    const signUp = async ({correo, password, nombre}: RegisterData) => {
        try {
            const resp = await mernAPI.post<LogInResponse>('/usuarios', {correo, password, nombre});
            dispatch(
                {
                    type:'signUp',
                    payload:{
                        token:resp.data.token,
                        user:resp.data.usuario,
                    },
                }
            );
            await AsyncStorage.setItem('token', resp.data.token);
        } catch (error) {
            console.log(error.response.data.errors[0].msg);
            dispatch(
                {
                    type:'addError',
                    payload: error.response.data.errors[0].msg || 'Información incorrecta',
                }
            );
        }
    };

    const logOut = async () => {
        await AsyncStorage.removeItem('token');
        dispatch({type:'logout'});
    };

    const removeError = () => {
        dispatch({type:'removeError'});
    };

    return (
        <AuthContext.Provider value={{
            ...state,
            signUp,
            signIn,
            logOut,
            removeError,
        }}>
            { children }
        </AuthContext.Provider>
    );
};
