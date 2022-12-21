import React, {useContext} from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Header_Title } from '../interfaces/appInterfaces';
import { ThemeContext } from '../Context/themeContext/ThemeContext';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const HeaderTitle = ({title}:Header_Title) => {
    const {top} = useSafeAreaInsets();
    const { theme } = useContext(ThemeContext);
    return (
        <View style={{marginTop: top+20, marginBottom:20}}>
            <Text style={{...styles.title, color:theme.colors.text}}>{title}</Text>
        </View>
    )
}
