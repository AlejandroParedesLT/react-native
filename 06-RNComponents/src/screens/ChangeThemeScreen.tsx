import React, {useContext} from 'react'
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../Context/themeContext/ThemeContext';
import { ThemeState } from '../interfaces/appInterfaces';

export const ChangeThemeScreen = () => {
  const {setDarkTheme, setLightTheme, theme } = useContext(ThemeContext);
  const changeLabel = () => {
    if (theme.dark){
      return (
        <Text>Light</Text>
      )
    }else{
      return (
        <Text>Dark</Text>
      )
    }  
  }
  const changeTheme = (theme_inp:ThemeState) => {
    if(theme_inp.currentTheme == 'dark'){
      return setLightTheme
    }else{
      return setDarkTheme
    }
  }
  
  return (
    <View style={styles.globalMargin}>
        <HeaderTitle title='Theme'/>
        <TouchableOpacity
          style={{...styles.buttonChangeTheme, backgroundColor:theme.colors.primary}}
          onPress={
            changeTheme(theme)
          }
        >
          <Text style={{color:theme.colors.text}}>{changeLabel()}</Text>
        </TouchableOpacity>
    </View>
  )
}
