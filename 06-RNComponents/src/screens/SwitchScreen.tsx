import React, { useState, useContext } from 'react'
import { View, Switch, Text } from 'react-native';
import { CustomSwitch } from '../components/customSwitch';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../Context/themeContext/ThemeContext';
import { styles } from '../theme/appTheme';

export const SwitchScreen = () => {
    const {theme} = useContext(ThemeContext);
    const [isEnabled, setIsEnabled] = useState({
        isActive:false,
        isHungry:false,
        isHappy:false
    });
    
    const {isActive, isHungry, isHappy} = isEnabled;

    const on_Change = (value:boolean, field:string) =>{
        setIsEnabled({
            ...isEnabled,
            [field]:value
        })
    }

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle  title={'Switch Screen'}/>
            <View style={{...styles.lists_Artificial}}>
                <Text style={{color:theme.colors.text}}>isActive</Text>
                <CustomSwitch isOn={isActive} on_Change={(value)=>on_Change(value,'isActive')}/>
            </View>
            <View style={styles.lists_Artificial}>
                <Text style={{color:theme.colors.text}}>isHungry</Text>
                <CustomSwitch isOn={isHungry} on_Change={(value)=>on_Change(value,'isHungry')}/>
            </View>
            <View style={styles.lists_Artificial}>
                <Text style={{color:theme.colors.text}}>isHappy</Text>
                <CustomSwitch isOn={isHappy} on_Change={(value)=>on_Change(value,'isHappy')}/>
            </View>
            <Text style={{fontSize:30, color:theme.colors.text}}>
                {JSON.stringify(isEnabled, null, 5)}
            </Text>
        </View>
    )
}
