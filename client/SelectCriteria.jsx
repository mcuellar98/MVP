import { StyleSheet, Text, View, Button } from 'react-native';
import StyleSelector from './StyleSelector';
import PriceSelector from './PriceSelector';
import RadiusSelector from './RadiusSelector';
import LocationSelector from './LocationSelector';
import { useState } from 'react';
import axios from 'axios';

export default function SelectCriteria({styles}) {

  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [state, setState] = useState('');
  const [radius, setRadius] = useState(1);
  const [terms, setTerms] = useState('')
  const [prices, setPrices] = useState([]);

  const handleSubmit = () => {
    console.log(address, city, state, zip);
    console.log(radius[0]);
    console.log(terms);
    console.log(prices);
    axios.get('http://47.230.192.119:3000/results');
  }

  return (
    <View style={styles.selectionContainer} >
      <LocationSelector styles={styles} setAddress={setAddress} setCity={setCity} setZip={setZip} setState={setState}/>
      <StyleSelector styles={styles} setTerms={setTerms}/>
      <PriceSelector styles={styles} prices={prices} setPrices={setPrices}/>
      <RadiusSelector styles={styles} radius={radius} setRadius={setRadius}/>
      <Button
      onPress={handleSubmit}
      title="Submit"
      color="#841584"
      accessibilityLabel="Submit"
      />
    </View>
  );
}