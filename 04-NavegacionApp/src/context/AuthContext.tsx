import React, { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";

export interface AuthState {
    isLoggedIn: boolean;
    username?:string;
    favoriteIcon?:string;
}

export const authInitialState: AuthState = {
    isLoggedIn:false,
};


export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    logout: () => any;
    changeFavoriteIcon: (iconName: string) => void;
    ChangeName: (name: string) => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}:any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const signIn = () => {
        dispatch({type:'signIn'});
    };

    const logout = () => {
        dispatch({type:'logout'});
    };

    const changeFavoriteIcon = (iconName:string) => {
        dispatch({type:'ChangeFavIcon', payload:iconName});
    };

    const ChangeName = (name:string) => {
        dispatch({type:'ChangeName', payload:name});
    };

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            logout,
            changeFavoriteIcon,
            ChangeName,
        }}>
            { children }
        </AuthContext.Provider>
    );
};
