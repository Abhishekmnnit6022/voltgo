import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import mapStyle from './../../../constants/mapstyle.json';

export default function AppMapview() {
return (
    <View style={styles.container}>
        <MapView
            style={styles.map}   
            region={{
                latitude: 20.5937,
                longitude: 78.9629,
                latitudeDelta: 12,
                longitudeDelta: 12,
            }}
            showsUserLocation={true} 
            customMapStyle={mapStyle}              
        />        
    </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
