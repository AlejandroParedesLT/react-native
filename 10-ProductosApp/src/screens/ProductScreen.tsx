/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useEffect, useState} from 'react';
import { View, Text, ScrollView, TextInput, Button, Image, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { StackScreenProps } from '@react-navigation/stack';
import { ProductsStackParams } from '../navigator/ProductsNavigator';
import { styles } from '../styles/styles';
import { useCategories } from '../hooks/useCategories';
import { useForm } from '../hooks/useForm';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
//import { onChange } from 'react-native-reanimated';
import { ProductsContext } from '../context/ProductsContext';

interface Props extends StackScreenProps<ProductsStackParams, 'ProductScreen'>{};

export const ProductScreen = ({navigation,route}:Props) => {
  const {id = '', name = ''} = route.params;
  const [tempUri, setTempUri] = useState<String>();
  const { categories } = useCategories();
  const {loadProductById, addProduct, updateProduct, deleteProduct, uploadImage} = useContext(ProductsContext)
  const {_id,categoriaId, nombre, img, form, setFormValue, onChange } = useForm({
    _id:id,
    categoriaId:'',
    nombre:name,
    img:'',
  });

  useEffect(() => {
    navigation.setOptions({
      title: (nombre) ? nombre : 'Nuevo Producto',
    });
  },[nombre, navigation]);
  useEffect(() => {
    if (id.length === 0) return;
    else {
      loadProduct();
      console.log(img);
    }
  },[id, img]);

  const loadProduct = async() => {
    if (id.length === 0) return;
    const product = await loadProductById(id);
    setFormValue({
      _id : id,
      categoriaId:product.categoria._id,
      img:product.img || '',
      nombre,
    });
  };

  const deleteProductbyId = async() => {
    if (id.length === 0) {
      return;
    }
    else {
      await deleteProduct(id);
      console.log(`element: ${id} deleted`);
    }
  };

  const saveOrUpdate = async() => {
    if (id.length > 0){
      updateProduct(categoriaId, nombre, id);
      console.log('update');
    } else {
      const tempCategoriaId = categoriaId || categories[0]._id;
      const newProduct = await addProduct(tempCategoriaId, nombre);
      onChange(newProduct._id, '_id');
      console.log('post');
    }
  };

  const takePhoto = () => {
    launchCamera(
      {mediaType:'photo', quality: 0.5},
      (resp) => {
        if (!resp.assets?.[0].uri) return;
        setTempUri(resp.assets?.[0].uri);
        uploadImage(resp, _id);
      }
    );
  };

  const takePhotoFromGallery = () => {
    launchImageLibrary(
      {mediaType:'photo', quality: 0.5},
      (resp) => {
        if (!resp.assets?.[0].uri) return;
        setTempUri(resp.assets?.[0].uri);
        uploadImage(resp, _id);
      }
    );
  };

  return (
    <View style={styles.containerProductScreen}>
        <ScrollView>
          <Text>Nombre del producto: </Text>
          <TextInput
            placeholder='Producto' 
            style={styles.TextInputProductScreen}
            value={nombre}
            onChangeText={ (value) => onChange(value,'nombre') }
          />
          <Text>Categoria: </Text>
          {categoriaId.length > 0 || id.length === 0 ? (
            <Picker
              selectedValue={categoriaId}
              onValueChange={(value) => onChange(value, 'categoriaId')}
            >
              {categories.map(c => (
                <Picker.Item
                  label={c.nombre}
                  value={c._id}
                  key={c._id}
                />
              ))}
            </Picker>
          ) : (
            <ActivityIndicator size={20} color="black" />
          )}

          {
            (_id.length > 0) && (
              <View style={{flexDirection:'row', justifyContent:'center', marginTop:10, marginBottom:10}}>
                <Button title="Camara" onPress={takePhoto} color="#5856D6"/>
                <View style={{width:10}}/>
                <Button title="Galeria" onPress={takePhotoFromGallery} color="#5856D6"/>
              </View>
            )
          }

          <Button title="Guardar" onPress={saveOrUpdate} color="#5856D6"/>
          <Button title="Eliminar" onPress={deleteProductbyId} color="#FF0000"/>

          {
            (img.length > 0 && !tempUri) && (
              <Image
                source = {{uri:img}}
                style={{
                  marginTop:20,
                  width:'100%',
                  height:300,
                }}
              />
            )
          }

          {
            (tempUri) && (
              <Image
                source = {{uri:tempUri}}
                style={{
                  marginTop:20,
                  width:'100%',
                  height:300,
                }}
              />
            )
          }
          <Text>{JSON.stringify(form,null,5)}</Text>
        </ScrollView>
    </View>
  );
};
