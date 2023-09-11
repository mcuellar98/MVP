import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import axios from 'axios';
import { SelectList } from 'react-native-dropdown-select-list'
import {useState} from 'react';
import {stateData} from './StatesData';

export default function LocationSelector({styles}) {

  // const [selected, setSelected] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [state, setState] = useState('');
  const data = stateData;

  const cityChange = (e) => {
    setCity(e.target.value);
  }

  const zipChange = (e) => {
    setZip(e.target.value);
  }

  const addressChange = (e) => {
    setAddress(e.target.value);
  }

  const stateChange = (value) => {
    setState(value);
  }

  return (
    <View style={styles.locationSelector}>
      <Button
      // onPress={onPressLearnMore}
      title="Use My Location"
      color="#841584"
      accessibilityLabel="Use My Location"
      />
      <TextInput
        placeholder='City'
        onChange={cityChange}
      />
      <TextInput
        placeholder='Address'
        onChange={addressChange}
      />
       <SelectList
        setSelected={(val) => stateChange(val)}
        data={data}
        save="value"
      />
      <TextInput
        placeholder='Zip Code'
        onChange={zipChange}
      />
    </View>
  );
}
