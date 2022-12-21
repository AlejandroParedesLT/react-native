import React from 'react'
import { Theme } from '@react-navigation/native';
import { ThemeState } from '../../interfaces/appInterfaces';

type ThemeAction =
 | {type:'set_light_theme'}
 | {type:'set_dark_theme'}

export const lightTheme: ThemeState = {
  currentTheme:'light',
  dark:false,
  dividerColor:'rgba(0,0,0,0.7)',
  colors: {
    primary: 'blue',
    background: 'white',
    card: 'blue',
    text: 'green',
    border: 'blue',
    notification: 'green',
  },
}

export const darkTheme: ThemeState = {
  currentTheme:'dark',
  dark:true,
  dividerColor:'red',
  colors: {
    primary: 'yellow',
    background: 'black',
    card: 'red',
    text: 'white',
    border: 'white',
    notification: 'orange',
  },
}

export const themeReducer = (state:ThemeState,action:ThemeAction):ThemeState => {
  switch (action.type) {
    case 'set_light_theme':
        return {...lightTheme} 
    case 'set_dark_theme':
      return {...darkTheme} 
    default:
      return state;
  }
}
