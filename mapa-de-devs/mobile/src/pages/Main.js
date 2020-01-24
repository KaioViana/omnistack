import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View, Text} from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';


function Main() {
    const [currentRegion, setCurrentRegion] = useState(null);

    useEffect(() => {
        async function loadInitialPosition () {
            const { granted } = await requestPermissionsAsync();
            if (granted) {
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true,
                });

                const { latitude, longitude } = coords;
                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04,
                });
            }
        }
        loadInitialPosition();
    }, []);

    if (!currentRegion) {
        return null;
    }

    return (
        <MapView initialRegion={currentRegion} style={styles.map}>
            <Marker coordinate={{latitude: -16.725217, longitude: -49.3039085}}>
                <Image style={styles.avatar} source={{uri: 'https://avatars2.githubusercontent.com/u/44887187?s=460&v=4'}}/>
                <Callout>
                    <View style={styles.callout}>
                        <Text style={styles.devName}>Kaio César Viana de Oliveira Costa</Text>
                        <Text style={styles.devBio}>Desenvolvedor RPA na Drasi estratégia e processos</Text>
                        <Text styles={styles.devTechs}>Uipath, Python, ReactJs</Text>
                    </View>
                </Callout>
            </Marker>
        </MapView>
    );

}

const styles = StyleSheet.create({
    map: {
        flex: 1
    },

    avatar: {
        width: 54,
        height: 54,
        borderRadius: 4,
        borderWidth: 4,
        borderColor: '#FFF',
    },

    callaout: {
        width: 300,
    },

    devName: {
        fontWeight: 'bold',
        fontSize: 16,
    },

    devBio: {
        color: '#666',
        marginTop: 5,
    },

    devTechs: {
        marginTop: 5,
    },
});

export default Main;
