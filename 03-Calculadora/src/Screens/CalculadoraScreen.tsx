import React from 'react'
import {Text, View} from 'react-native';
import { styles } from '../Theme/appTheme';
import { BotonCalc } from '../Components/BotonCalc';
import { useCalculadora } from '../Hooks/useCalculadora';



export const CalculadoraScreen = () => {
  
  const {
    anterior,
    numero,
    armarNumero,
    limpiar,
    positivoNegativo,
    delNum,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    btnIgual,
  } = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
      {
        (anterior !== '0') && (
          <Text style={styles.resultadoPequenio}>{anterior}</Text>    
        )
      }
      
      <Text
        style={styles.resultado}
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        {numero}
      </Text>

      <View style={styles.fila}>
        <BotonCalc texto = 'C' color="#D4D4D2" accion = {limpiar}/>
        <BotonCalc texto = '+/-' color="#D4D4D2" accion = {positivoNegativo}/>
        <BotonCalc texto = 'del' color="#D4D4D2" accion = {delNum}/>
        <BotonCalc texto = '/' color="#FF9500" accion = {btnDividir}/>
      </View>

      <View style={styles.fila}>
        <BotonCalc texto = '7' accion={armarNumero}/>
        <BotonCalc texto = '8' accion={armarNumero}/>
        <BotonCalc texto = '9' accion={armarNumero}/>
        <BotonCalc texto = 'X' color="#FF9500" accion = {btnMultiplicar}/>
      </View>
      
      <View style={styles.fila}>
        <BotonCalc texto = '4' accion={armarNumero}/>
        <BotonCalc texto = '5' accion={armarNumero}/>
        <BotonCalc texto = '6' accion={armarNumero}/>
        <BotonCalc texto = '-' color="#FF9500" accion = {btnRestar}/>
      </View>

      <View style={styles.fila}>
        <BotonCalc texto = '1' accion={armarNumero}/>
        <BotonCalc texto = '2' accion={armarNumero}/>
        <BotonCalc texto = '3' accion={armarNumero}/>
        <BotonCalc texto = '+' color="#FF9500" accion = {btnSumar}/>
      </View>

      <View style={styles.fila}>
        
        <BotonCalc texto = '0' accion={armarNumero} ancho/>
        <BotonCalc texto = '.' accion={armarNumero}/>
        <BotonCalc texto = '=' color="#FF9500" accion = {btnIgual}/>
      </View>

    </View>
  );
};
