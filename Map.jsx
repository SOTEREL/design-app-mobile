import React from 'react';
import { StyleSheet } from 'react-native';

import MapView, { UrlTile } from 'react-native-maps';

export default function Map() {
  const ROAD_BACKGROUND = 'http://c.tile.openstreetmap.org/{z}/{x}/{y}.png';
  const SATELLITE_BACKGROUND = ('https://wxs.ign.fr/choisirgeoportail/geoportail/wmts?'+
            '&REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&TILEMATRIXSET=PM'+
            '&LAYER=ORTHOIMAGERY.ORTHOPHOTOS&STYLE=normal&FORMAT=image/jpeg'+
            '&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}');
  const CADASTRALPARCELS_BACKGROUND = ('https://wxs.ign.fr/choisirgeoportail/geoportail/wmts?'+
            '&REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&TILEMATRIXSET=PM'+
            '&LAYER=CADASTRALPARCELS.PARCELS&STYLE=normal&FORMAT=image/png'+
            '&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}');

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
        urlTemplate={CADASTRALPARCELS_BACKGROUND}
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
