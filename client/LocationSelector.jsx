import { StyleSheet, Text, View, Button, TextInput, Switch} from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import {stateData} from './StatesData';
import { useState } from 'react';

export default function LocationSelector({styles , setCity, setZip, setState, setAddress}) {

  const [useLocation, setUseLocation] = useState(false);
  const data = stateData;

  const cityChange = (e) => {
    setCity(e.target.value);
  }

  const zipChange = (value) => {
    setZip(value);
  }

  const addressChange = (e) => {
    setAddress(e.target.value);
  }

  const stateChange = (value) => {
    setState(value);
  }

  return (
    <View style={styles.locationSelector}>
      {/* <Button
      // onPress={onPressLearnMore}
      title="Use My Location"
      accessibilityLabel="Use My Location"
      /> */}
      <View style={styles.locPermission}>
        <Text style={{padding: 10, fontSize: 18}}>Use My Location</Text>
        <Switch
          style={{justifyContent: 'center',alignItems: 'center'}}
          value={useLocation}
          onValueChange={(value) => setUseLocation(value)}
        />
      </View>
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
       {/* <SelectList style={{backgroundColor: 'red'}}
        setSelected={(val) => stateChange(val)}
        data={data}
        save="value"
      /> */}
      <TextInput style={styles.textInput}
        placeholder='Zip Code'
        onChangeText={value => zipChange(value)}
      />
    </View>
  );
}
