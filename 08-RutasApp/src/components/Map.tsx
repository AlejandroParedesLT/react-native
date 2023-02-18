/* eslint-disable no-return-assign */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import { View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { useLocation } from '../hooks/useLocation';
import { LoadingScreen } from '../Screens/LoadingScreen';
import { styles } from '../styles/styles';
import { Fab } from './Fab';


interface Props {
    markers?: typeof Marker[];
}

export const Map = ({markers}: Props) => {
    const [showPolyline, setshowPolyline] = useState(true);
    const {hasLocation,
            initialPosition,
            getCurrentLocation,
            followUserLocation,
            userLocation,
            stopFollowUserLocation,
            routeLines} = useLocation();
    const mapViewRef = useRef<MapView>();
    const following = useRef<boolean>(true);

    useEffect(() => {
        followUserLocation();
        return () => {
            stopFollowUserLocation();
        };
    },);

    useEffect(() => {
        if (!following.current) return;
        const {latitude, longitude} = userLocation;
        mapViewRef.current?.animateCamera({
            center: {latitude, longitude},
        });
    },[userLocation]);
    /*const centerPosition = async () => {
        const {latitude, longitude} = await getCurrentLocation();
        mapViewRef.current?.animateCamera({
            center: {latitude, longitude},
        });
    }*/
    if (!hasLocation){
        return <LoadingScreen />;
    }

    return (
        <View style={styles.container2}>
        {/*<Icon name="star-outline" size={30} color={'blue'}/>*/}
            <MapView
                //provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                ref = {(el) => mapViewRef.current = el!}
                style={styles.map}
                showsUserLocation
                region={{
                latitude: initialPosition.latitude,
                longitude: initialPosition.longitude,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
                }}
                onTouchStart={() => following.current = false}
            >
                {
                    showPolyline && (
                        <Polyline
                            coordinates={routeLines}
                            strokeColor="black"
                            strokeWidth={3}
                        />
                    )
                }
                {/*<Marker
                    //key={index}
                    coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                    }}
                    image={require('../Assets/custom-marker.png')}
                    title={'Titulos'}
                    description={'Descripcion marcador'}
                />*/}
            </MapView>
            <Fab
                iconName="brush-outline"
                onPress={() => setshowPolyline(value => !value)}
                style={{
                    position: 'absolute',
                    bottom:80,
                    right:20,
                }}
            />
        </View>
    );
};
