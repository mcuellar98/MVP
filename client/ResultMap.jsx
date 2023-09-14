import { StyleSheet, Text, View, FlatList, ScrollView} from 'react-native';
import _ from 'underscore';
import { useState, useEffect } from 'react';
import MapView, { AnimatedRegion, Animated } from 'react-native-maps';
import { Marker } from "react-native-maps";

export default function ResultMap({reviews, latitude, longitude}) {

  const [region, setRegion] = useState({
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: 0.03,
      longitudeDelta: 0.03
  })

  const handleRegionChange = () => {
    setRegion({
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.03,
        longitudeDelta: 0.03
    })
  };

  useEffect(() => {
    setRegion(
      {
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.03,
        longitudeDelta: 0.03,
      }
    )
  }, [latitude])

  return (
      <MapView
      style={styles.mapContainer}
      region={region}
      onRegionChange={handleRegionChange}
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