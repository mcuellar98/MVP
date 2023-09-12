import { StyleSheet, Text, View, Button, SafeAreaView} from 'react-native';
import StyleSelector from './StyleSelector';
import PriceSelector from './PriceSelector';
import RadiusSelector from './RadiusSelector';
import LocationSelector from './LocationSelector';
import ResultList from './ResultList';
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
  const [results, setResults] = useState([]);

  const handleSubmit = () => {
    fetch('http://localhost:3000', {
      headers: {
        'Content-Type': "application/json",
      },
      method: 'post',
      body: JSON.stringify({
        location: zip,
        term: terms,
        radius: parseInt(radius[0])*1000,
        price: prices.map((string) => string.length).join(','),
        open_now: true
      })
  })
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      setResults(response);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <SafeAreaView style={styles.selectionContainer} >
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
      <ResultList results={results}/>
    </SafeAreaView>
  );
}