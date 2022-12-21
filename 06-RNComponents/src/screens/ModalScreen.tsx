import React from 'react'
import { View, Button, Modal, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useState } from 'react';

export const ModalScreen = () => {
    const [isVisible, setIsVisible] = useState(false)
    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title='Modal Screen'/>
            
            <Button title="Abrir Modal"
                onPress={()=>setIsVisible(true)}
            />
            
            <Modal
                animationType="fade"
                visible={isVisible}
                transparent={true}
            >
                <View
                    style={{
                        flex:1,
                        //width:1000, 
                        //height:1000, 
                        justifyContent: 'center',
                        alignItems:'center',
                        alignContent:'center',
                        backgroundColor:'rgba(0,0,0,0.5)'
                    }}
                >
                    <View style={{
                        width:300, 
                        height:500,
                        backgroundColor:'white',
                        alignItems:'center',
                        justifyContent: 'center',
                    }}>
                        <HeaderTitle title='Modal'/>
                        <Text>Cuerpo del modal</Text>
                        <Button title='Cerrar' onPress={()=>setIsVisible(false)}/>
                    </View>
                </View>
            </Modal>
        </View>
    )
}
