/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useEffect, useState} from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { ProductsContext } from '../context/ProductsContext';
import { styles } from '../styles/styles';
import { StackScreenProps } from '@react-navigation/stack';
import { ProductsStackParams } from '../navigator/ProductsNavigator';
import { AuthContext } from '../context/AuthContext';
//import useState from 'react';

interface Props extends StackScreenProps<ProductsStackParams, 'ProductsScreen'>{};

export const ProductsScreen = ({navigation}:Props) => {
  const {products, loadProducts} = useContext(ProductsContext);
  const [stateproducts, setstateproducts] = useState(false);
  const {logOut} = useContext(AuthContext);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity
            style={{marginRight:10}}
            //onPress={() => navigation.navigate('ProductScreen', {})}
            onPress={() => logOut()}
          >
            <Text>Log Out</Text>
          </TouchableOpacity>
        );
      },
    });
  });

  const loadProductsFromBackends = async() => {
    setstateproducts(true);
    await loadProducts();
    setstateproducts(false);
  }

  return (
    <View style={{flex:1,marginHorizontal:10}}>
        <FlatList
          data={products}
          keyExtractor={ (p)=>p._id }
          onRefresh={()=>loadProductsFromBackends()}
          refreshing={stateproducts}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={
                () => navigation.navigate('ProductScreen', {
                  id:item._id,
                  name:item.nombre,
                }
              )}
            >
              <Text style={styles.productsName}>{item.nombre}</Text>
            </TouchableOpacity>
          )}

          ItemSeparatorComponent = {
            () => ( <View style={styles.ProductItemSeparator}/> )
          }
        />
        <View style={styles.bottomLogOut}>
          <TouchableOpacity
            style={styles.buttonAgregar}
            onPress={() => navigation.navigate('ProductScreen', {})}
          >
            <Text>Agregar</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};
