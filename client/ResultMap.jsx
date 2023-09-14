import { StyleSheet, Text, View, FlatList, ScrollView} from 'react-native';
import _ from 'underscore';
import { useState } from 'react';
import MapView from 'react-native-maps';
import { Marker } from "react-native-maps";

export default function ResultMap({reviews, latitude, longitude}) {

  const region = {
    latitude: latitude,
    longitude: longitude,
    latitudeDelta: 0.03,
    longitudeDelta: 0.03,
  }

  return (
      <MapView
      style={styles.mapContainer}
      initialRegion={region}
      >
      <Marker coordinate={region} />
      </MapView>
    )
  }

const styles = StyleSheet.create({
  mapContainer: {
    height: 300,
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: 'white',
    marginBottom:10
  }
});