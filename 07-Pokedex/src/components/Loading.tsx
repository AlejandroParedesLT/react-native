import React from 'react'
import { View, ActivityIndicator, Text } from 'react-native';
import { styles } from '../theme/appTheme';

export const Loading = () => {
    return (
        <View style={styles.search_ActivityContainer}>
            <ActivityIndicator
            size={50}
            color="grey"
            />
            <Text>Cargando...</Text>
        </View>
    );
};
