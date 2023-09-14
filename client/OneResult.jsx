import { StyleSheet, Text, View, FlatList, ScrollView, Linking, Button, RefreshControl} from 'react-native';
import _ from 'underscore';
import {useEffect, useState, useCallback} from 'react';
import ResultInfo from './ResultInfo.jsx';
import ResultMap from './ResultMap.jsx';

export default function OneResult({route}) {

  const results = route.params.results;
  const index = Math.floor(Math.random() * results.length);


  const [result, setResult] = useState(results[index]);
  const [latitude, setLatitude] = useState(result.coordinates.latitude);
  const [longitude, setLongitude]= useState(result.coordinates.longitude);
  const [refreshing, setRefreshing] = useState(false);
  const [reviews, setReviews] = useState([]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setResult(results[Math.floor(Math.random() * results.length)])
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  }, []);

  const OpenURLButton = () => {
    const handlePress = useCallback(async () => {
      const supported = await Linking.canOpenURL(result.url);

      if (supported) {
        await Linking.openURL(result.url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${result.url}`);
      }
    }, [result.url]);
    return <Button title={'Website'} onPress={handlePress} />;
  };

  useEffect(() => {
    setLatitude(result.coordinates.latitude);
    setLongitude(result.coordinates.longitude);
  }, [result])

  useEffect(() => {
    fetch('http://localhost:3000/reviews', {
      headers: {
        'Content-Type': "application/json",
      },
      method: 'post',
      body: JSON.stringify({id: result.id})
    })
    .then((response) => {
      return response.json();
    })
    .then((reviews) => {
      setReviews(_.sortBy((reviews), (review) => {return -review.time_created}))
    })
    .catch((err) => {
      console.log(err)
    })
  }, [result])

  return (
    <ScrollView style={styles.resultList}>
       <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      <View key={result.id} style={styles.resultEntry}>
        <Text style={{fontSize: 18, alignItems:'center', justifyContent:'center', marginBottom: 10}}>{result.name}</Text>
        <View style={styles.resultDetails}>
          <Text style={{fontSize: 16, }}>
            {_.reduce(result.categories, (memo, category, index) => {
              index === 0 ? stringLength = 0 : null;
              stringLength += (category.title.length + 1);
              return index < result.categories.length-1  ? memo += category.title +'/' : memo += category.title
            }, '')}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 15, paddingTop: 5}}> {result.rating} ★</Text>
            <Text style={{fontSize: 15, paddingTop: 5, marginBottom: 10}}> | {Math.round(result.distance * 0.0621371)/100} miles</Text>
          </View>
        </View>
        <OpenURLButton/>
      </View>
      <ResultMap latitude={latitude} longitude={longitude}/>
      <ResultInfo reviews={reviews}/>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  resultDetails: {
    flexDirection: 'col',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems:'center',
  },
  resultEntry: {
    flexDirection: 'col',
    height: 'auto',
    borderRadius: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    justifyContent:'space-around',
    alignItems: 'center',
    padding: 10,
    paddingTop: 25,
    marginBottom:10
  },
  resultList: {
    padding:15
  }
});