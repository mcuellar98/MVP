import { StyleSheet, Text, View, Button, TextInput, Switch, Alert} from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import {stateData} from './StatesData';
import { useState } from 'react';
import * as Location from 'expo-location';

export default function LocationSelector({styles , setCity, setZip, setState, setAddress, setLatitude, setLongitude}) {

  const [useLocationToggle, setUseLocationToggle] = useState(false);
  const [locationStatus, setLocationStatus] = useState('');
  const [location, setLocation] = useState('');
  const data = stateData;

  const getPermissionAndPosition = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    setLocationStatus(status);
    if (status === 'denied') {
      setUseLocationToggle(false);
    } else if (status === 'granted') {
      const {coords} = await Location.getCurrentPositionAsync();
      setLatitude(coords.latitude);
      setLongitude(coords.longitude);
    }
  }

  const handleLocationToggle = (value) => {
    setAddress('');
    setCity('');
    setZip('');
    setState('');
    setUseLocationToggle(value);
    if (locationStatus === '') {
      getPermissionAndPosition();
    }
  };

  const cityChange = (value) => {
    setCity(value);
  }

  const zipChange = (value) => {
    setZip(value);
  }

  const addressChange = (value) => {
    setAddress(value);
  }

  const stateChange = (value) => {
    setState(value);
  }

  return (
    <View style={styles.locationSelector}>
      <View style={styles.locPermission}>
        <Text style={{padding: 10, fontSize: 18}}>Use My Location</Text>
        <Switch
          style={{justifyContent: 'center',alignItems: 'center'}}
          value={useLocationToggle}
          onValueChange={(value) => handleLocationToggle(value)}
        />
      </View>
      {useLocationToggle ? null :
      <View>
      <TextInput style={styles.textInput}
      placeholder='Address'
      onChangeText={value => addressChange(value)}
        />
      <TextInput style={styles.textInput}
      placeholder='City'
      onChangeText={value => cityChange(value)}
      />
      <TextInput style={styles.textInput}
        placeholder='State'
        onChangeText={value => stateChange(value)}
      />
      <TextInput style={styles.textInput}
        placeholder='Zip Code'
        onChangeText={value => zipChange(value)}
      />
      </View>}
    </View>
  );
}
