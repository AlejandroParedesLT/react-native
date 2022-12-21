import React, { useState } from 'react'
import { Text, View, FlatList, Switch } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/itemSeparator';
import { menuItems } from '../data/menuItemsList';
import { styles } from '../theme/appTheme';

export const HomeScreen = () => {
  return (
    <View style={{flex:1, ...styles.globalMargin}}>
      {/*<Icon 
        name="star-outline"
        size={ 50 }
        color='black'
      />*/}
      <FlatList 
        data = {menuItems}
        renderItem= {({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor = {(item)=> item.name}
        ListHeaderComponent={() => <HeaderTitle title={'Options Screen'}/>}
        ItemSeparatorComponent={ItemSeparator}
      />
    </View>
  )
}
