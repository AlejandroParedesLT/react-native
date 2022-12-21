import React from 'react'
import { View, FlatList, Text, Image, ActivityIndicator  } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { useState } from 'react';
import { styles } from '../theme/appTheme';

export const InfiniteScrollScreen = () => {
    const [numbers, setNumers] = useState([0,1,2,3,4,5])

    const loadMore = () => {
        const newArray: number[] = [];
        for( let i = 0; i<5; i++){
            newArray[i] = numbers.length +i;
        }
        setTimeout(()=>{
            setNumers([...numbers,...newArray])
        }, 1500)
    }

    const renderItem = (item:number) => {
        return (
            <Image 
                source={{uri:`https://picsum.photos/id/${item}/500/400`}}
                style={{
                    width:'100%',
                    height:400
                }}
            />
        )
    }
    return (
        <View >
            <FlatList 
                data={numbers}
                keyExtractor={(item)=>item.toString()}
                renderItem={({item})=>renderItem(item)}
                ListHeaderComponent={<HeaderTitle title='Infinite Scroll'/>}
                onEndReached={loadMore}
                onEndReachedThreshold={0.5}
                ListFooterComponent={()=>(
                    <View style={
                        {
                            height:150,
                            width:'100%',
                            justifyContent:'center',
                            alignItems:'center'
                        }
                    }>
                        <ActivityIndicator size={20} color="#5856d6"/>
                    </View>
                )}
            />

        </View>
    )
}
