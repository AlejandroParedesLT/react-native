/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react'
import { ActivityIndicator, Animated, ImageErrorEventData, NativeSyntheticEvent,  View } from 'react-native'
import { useAnimation } from '../hooks/useAnimation';
import { Props_FadeIn } from '../interfaces/pokemonInterfaces';


export const FadeInImage = ({ uri, style = {} } : Props_FadeIn) => {

    const { opacity, fadeIn } = useAnimation();
    const [ isLoading, setIsLoading ] = useState( true );

    const finishLoading = () => {
        setIsLoading(false);
        fadeIn();
    }

    const onError = (_err: NativeSyntheticEvent<ImageErrorEventData>) => {
        setIsLoading( false );
    }

    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            ...style as any,
        }}>

            {
                isLoading && 
                    <ActivityIndicator 
                        style={{ position: 'absolute' }} 
                        color="grey"
                        size={ 30 }
                    />
            }

            <Animated.Image
                source={{ uri }}
                onError={ onError } 
                onLoad={ finishLoading }
                style={{
                    ...style as any,
                    opacity,
                }}
            />

        </View>
    )
}
