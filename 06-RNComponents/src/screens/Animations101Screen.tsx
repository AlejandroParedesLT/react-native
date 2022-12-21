import React, { useRef } from 'react'
import { Text, View, Animated, Button, Easing } from 'react-native'
//import Animated from 'react-natfaive-reanimated'
import { styles } from '../theme/appTheme';
import { useAnimation } from '../hooks/useAnimation';

export const Animations101Screen = () => {
  const {opacity,position,fadeIn,fadeOut, startMoving} = useAnimation();
  return (
    <View style={styles.container}>
      <Animated.View style={{
        ...styles.purpleBox,
        opacity,
        transform: [{
          translateY:position
        }]
      }}/>

      <Button 
        title='FadeIn'
        onPress={() => {
          fadeIn();
          startMoving(0, 3000);
        }}
      />

      <Button
        title='FadeOut'
        onPress={fadeOut}
      />
    </View>
  )
}
