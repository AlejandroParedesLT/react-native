import { ImageSourcePropType } from "react-native";
import { Theme } from '@react-navigation/native';

export interface menuItem {
    name:string;
    icon: string;
    component: string;
  }

export interface Header_Title {
  title:string,
}

export interface Switch_state {
  isOn: boolean,
  on_Change:(value:boolean)=>void;
}

export interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType
}

export interface ThemeContextProps {
  theme:ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export interface ThemeState extends Theme{
  currentTheme: 'light' | 'dark',
  dividerColor: string;
}

export interface Casas {
  casa: string;
  data: string[];
}