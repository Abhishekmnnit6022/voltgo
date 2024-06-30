import React, { useContext } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import mapStyle from './../../../constants/mapstyle.json';
import UserLocationContext from './../../context/UserLocationcontext';

export default function AppMapview() {
  const { location } = useContext(UserLocationContext);

  if (!location?.latitude) {
    return null;
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.005,
        longitudeDelta: 0.005,
        }}
        customMapStyle={mapStyle}
        userLocationAnnotationTitle="Your Location"
      >
        <Marker
          coordinate={{ latitude: location.latitude, longitude: location.longitude }}
          title="Your Location"
        />
      </MapView>
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
