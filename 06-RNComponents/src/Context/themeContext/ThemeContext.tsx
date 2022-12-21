import React, { createContext,useReducer, useEffect } from "react";
import { ThemeContextProps } from '../../interfaces/appInterfaces';
import { lightTheme, themeReducer, darkTheme } from './ThemeReducer';
import {useColorScheme, AppState, Appearance} from 'react-native';

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}:any) => {
    const colorScheme = useColorScheme();
    const [theme, dispatch] = useReducer(themeReducer, (Appearance.getColorScheme()==='dark') ?darkTheme: lightTheme);
    useEffect(() => {
        AppState.addEventListener('change', (status) => {
            if(status==='active'){
                (Appearance.getColorScheme()==='light') ?setLightTheme: setDarkTheme;
            }
        })
    }, [])
    
    
    const setDarkTheme = () => {
        dispatch({type:'set_dark_theme'})
        console.log('Dark theme');
    }
    const setLightTheme = () => {
        dispatch({type:'set_light_theme'})
        console.log('Light theme');
    }
    return (
        <ThemeContext.Provider value={{
            theme,
            setDarkTheme,
            setLightTheme,
        }}>
            {children}
        </ThemeContext.Provider>
    )
}