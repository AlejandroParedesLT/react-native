/* eslint-disable react-hooks/exhaustive-deps */
import React ,{useContext} from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/GradientContext';
import { useEffect } from 'react';
import { useFade } from '../hooks/useFade';

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const GradientBackground = ({children}:Props) => {
  const {colors, prevColors, setMainPrevColors} = useContext(GradientContext);
  const {opacity, fadeIn, fadeOut} = useFade();
  useEffect(() => {
    fadeIn(()=>{
      setMainPrevColors(colors);
      fadeOut();
    });
  }, [colors]);

  return (
    <View style={{flex:1, backgroundColor:"grey"}}>
        <LinearGradient
            //colors={['#16537E', '#167E7E', 'white']}
            colors={[prevColors.primary, prevColors.secondary, 'white']}
            style={{...StyleSheet.absoluteFillObject}}
            start={{x:0.1, y:0.1}}
            end={{x:0.5, y:0.7}}
        />
        <Animated.View
          style={{...StyleSheet.absoluteFillObject,
            opacity,
          }}
        >
          <LinearGradient
            colors={[colors.primary, colors.secondary, 'white']}
            style={{...StyleSheet.absoluteFillObject}}
            start={{x:0.1, y:0.1}}
            end={{x:0.5, y:0.7}}
          />
        </Animated.View>
        {children}
    </View>
  )
}
