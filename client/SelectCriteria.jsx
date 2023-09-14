import { StyleSheet, Text, View, Pressable, SafeAreaView, ScrollView, Alert} from 'react-native';
import StyleSelector from './StyleSelector';
import PriceSelector from './PriceSelector';
import RadiusSelector from './RadiusSelector';
import LocationSelector from './LocationSelector';
import ResultList from './ResultList';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export default function SelectCriteria({route, navigation}) {


  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [state, setState] = useState('');
  const [radius, setRadius] = useState(1);
  const [terms, setTerms] = useState('')
  const [prices, setPrices] = useState([]);
  const [longitude, setLongitude] = useState(undefined);
  const [latitude, setLatitude] = useState(undefined);
  const [resultLimit, setResultLimit] = useState(0);
  const [results, setResults] = useState([]);

  const feelingLucky = useRef();

  useEffect(() => {
    if (results.length > 0 && !feelingLucky.current) {
      navigation.navigate('Results', {
        results: results
      })
    } else if (results.length > 0 && feelingLucky.current) {
      navigation.navigate('OneResult', {
        results: results
      })
    }
  },[results])

  const handleSubmit = () => {
    var reqBody;
    var location = address+' '+city+' '+state+' '+zip;
    {location.length > 3 ?
      reqBody = {
        location: location,
        categories: terms,
        radius: parseInt(radius[0])*1600,
        price: prices.map((string) => string.length).join(','),
        open_now: true
        } :
      reqBody = {
        longitude: longitude,
        latitude: latitude,
        term: terms,
        radius: parseInt(radius[0])*1000,
        price: prices.map((string) => string.length).join(','),
        open_now: true
      }
    };
    fetch('http://localhost:3000', {
      headers: {
        'Content-Type': "application/json",
      },
      method: 'post',
      body: JSON.stringify(reqBody)
    })
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      setResults(response);
    })
    .catch((err) => {
      Alert.alert('Please Fill Required Fields');
      // console.log(err);
    })
  }

  return (
    <ScrollView contentContainerStyle={styles.selectionContainer} >
      <LocationSelector styles={styles} setAddress={setAddress} setCity={setCity} setZip={setZip} setState={setState} setLatitude={setLatitude} setLongitude={setLongitude}/>
      <StyleSelector styles={styles} setTerms={setTerms}/>
      <PriceSelector styles={styles} prices={prices} setPrices={setPrices}/>
      <RadiusSelector styles={styles} radius={radius} setRadius={setRadius}/>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={() => {
            // setResultLimit(1);
            feelingLucky.current = true;
            handleSubmit();
          }}
        >
           <Text>I'm Feeling Lucky</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => {
            // setResultLimit(10);
            feelingLucky.current = false;
            handleSubmit();
          }}
        >
          <Text>Give Me Some Options</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // appContainer: {
  //   // backgroundColor: '#f9f0dc',
  //   marginRight: 15,
  //   marginLeft: 15,
  //   alignItems: 'stretch'
  // },
  selectionContainer: {
    marginRight: 15,
    marginLeft: 15,
    flexDirection: 'col',
    justifyContent: 'space-between',
  },
  styleSelector: {
    marginBottom: 10
  },
  priceSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  priceOption: {
    flexDirection: 'col',
    alignItems: 'center',

  },
  priceContainer: {
    marginBottom: 20,
  },
  radiusSelector: {
    marginBottom: 30
  },
  locationSelector: {
  },
  textInput: {
    marginBottom: '3%',
    borderWidth: 1,
    borderColor: '#D0D0D0',
    borderRadius: 15,
    padding: 15,
    fontSize: 16,
    backgroundColor: 'white'
  },
  stateInput: {
    width: '100px',
    marginBottom:'3%'
  },
  locPermission: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '3%',
    marginTop: '3%'
  },
  buttonContainer: {
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    borderWidth: 1,
    width: 170,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  homeHeader: {
    height: 80,
    backgroundColor: '#FF8464'
  },
  homeFooter: {
    height: 80,
    backgroundColor: '#FF8464'
  }
});