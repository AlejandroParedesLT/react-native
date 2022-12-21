import React from 'react'
import { Dimensions, SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import { HeaderTitle } from '../components/HeaderTitle';
import { items } from '../data/SlidesScreenData';
import { Slide } from '../interfaces/appInterfaces';
import { styles } from '../theme/appTheme';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
//import { useNavigation } from '@react-navigation/core';

const {height:screenHeight, width:screenWidth} = Dimensions.get('window');

export const SlidesScreen = ({ navigation }:any) => {
  const [activeIndex, setActiveIndex] = useState(0);
  //const navigation = useNavigation()
  const renderItem = (item:Slide) => {
    return (
      <View
        style={{
          flex:1,
          backgroundColor:'white',
          borderRadius:5,
          padding:40,
          justifyContent:'center'
        }}
      >
        <Image 
          source={item.img}
          style={{
            width:350,
            height:400,
            resizeMode:'center'
          }} 
        />
        <Text style={styles.title_slidesscreen}>{item.title}</Text>
        <Text style={styles.subtitle_slidesscreen}>{item.desc}</Text>
      </View>
    )
  }
  return (
    <SafeAreaView
      style={{
        flex:1,
        paddingTop:10,
      }}
    >
        <HeaderTitle title='Welcome to the app'/>
        <Carousel
          //ref={(c) => { this._carousel = c; }}
          data={items}
          renderItem={({item}:{item:Slide})=>renderItem(item)}
          sliderWidth={screenWidth}
          itemWidth={screenWidth}
          layout='default'
          onSnapToItem={(index)=>{
            setActiveIndex(index)
          }}
        />
        <View
          style={{
            flexDirection:'row',
            justifyContent:'space-between',
            marginHorizontal:20,
            alignItems:'center'
          }}
        >
          <Pagination 
            dotsLength={items.length}
            activeDotIndex={activeIndex}
            dotStyle={{
              width:10,
              height:10,
              borderRadius:10,
              backgroundColor:'#5856D6'
            }}
          />
          {
            activeIndex == 2 &&
            <TouchableOpacity style={{
              flexDirection:'row',
              backgroundColor:'#5856D6',
              width:150,
              height:50,
              borderRadius:10,
              justifyContent:'center',
              alignItems:'center'
            }}
              onPress={() => navigation.navigate('HomeScreen')}
            >
              <Text style={{
                fontSize:25,
                color:'white'
              }}>Entrar</Text>
              <Icon 
                name='chevron-forward-outline'
                color='white'  
                size={30}
              />
            </TouchableOpacity>
          }
        </View>
        
    </SafeAreaView>
  )
}
