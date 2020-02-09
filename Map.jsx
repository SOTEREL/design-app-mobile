import React from 'react';
import { StyleSheet } from 'react-native';

import MapView, { UrlTile } from 'react-native-maps';

export default function Map() {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 44.190295120053385,
        longitude: 2.663369519851697,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <UrlTile
        urlTemplate="http://c.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
