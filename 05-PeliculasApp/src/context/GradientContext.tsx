import React, { createContext } from 'react';
import {useState} from 'react';

interface ImageColors {
    primary: string,
    secondary: string,
}

interface ContextProps {
    colors: ImageColors,
    prevColors: ImageColors,
    setMainColors: (colors: ImageColors) => void,
    setMainPrevColors: (colors: ImageColors) => void,
}

export const GradientContext = createContext({} as ContextProps);

export const GradientProvider = ({children}:any) => {
    const [colors, setColors] = useState<ImageColors>({
        //primary: '#16537E',
        //secondary: '#167E7E',
        primary: 'transparent',
        secondary: 'transparent',
    });

    const [prevColors, setprevColors] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent',
    });

    const setMainColors = (Colors: ImageColors) => {
        setColors(Colors);
    };

    const setMainPrevColors = (Colors: ImageColors) => {
        setprevColors(Colors);
    };

    return (
        <GradientContext.Provider value={{
            colors,
            prevColors,
            setMainColors,
            setMainPrevColors,
        }}>
            {children}
        </GradientContext.Provider>
    );
};
