import React, { useRef } from 'react'
import { Animated, PanResponder, Text, View } from "react-native";
import { DraggableView } from '../hooks/useDraggable';
import { styles } from '../theme/appTheme'

export const Animations102Screen = () => {
  
  return (
    <View style={styles.container}>
      {/*<View style={styles.purpleBox}/>*/}
      <DraggableView />
    </View>
  )
}
