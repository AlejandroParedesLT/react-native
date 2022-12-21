import React, {useContext} from 'react'
import { View, ScrollView, RefreshControl } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { useState } from 'react';
import { ThemeContext } from '../Context/themeContext/ThemeContext';

export const PulltoRefreshScreen = () => {
    const {theme} = useContext(ThemeContext);
    const [refreshing, setrefreshing] = useState(false);
    const [data, setdata] = useState<string>()

    const onRefresh = () => {
        setrefreshing(true);
        setTimeout(()=>{
            console.log('Terminado');
            setrefreshing(false);
            setdata('Hola Mundo')
        }, 1500)

    }
    return (
            <ScrollView
                refreshControl={
                    <RefreshControl 
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        //progressViewOffset={150}
                        progressBackgroundColor={theme.colors.text}
                        colors={[theme.colors.primary, theme.colors.border, theme.colors.card]}

                    />
                }
            >
                <View>
                    <HeaderTitle title='Pull to refresh'/>
                    {
                        data && <HeaderTitle title={data}/>
                    }
                </View>
            </ScrollView>
    )
}
