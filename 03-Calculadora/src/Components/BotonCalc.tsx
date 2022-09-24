import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../Theme/appTheme'

interface Props {
    texto:string,
    color?:string,
    ancho?:boolean, 
    accion:(numeroTexto:string)=>void,
}

export const BotonCalc = ({texto, color = '#1C1C1C', ancho=false, accion}:Props) => {
  return (
    <TouchableOpacity
        onPress={()=>accion(texto)}
    >
        
        <View style={{
            ...styles.boton,
            backgroundColor:color,
            width:(ancho) ? 180 : 80,
        }}>
            <Text style={{
                ...styles.botonTexto,
                color:(color === '#D4D4D2') ? 'black':'white'
            }}>{texto}</Text>
        </View>

    </TouchableOpacity>
  )
}
