import { StyleSheet, Text, View, FlatList, ScrollView} from 'react-native';
import _ from 'underscore';
import {useEffect, useState} from 'react';
import ResultInfo from './ResultInfo.jsx';
import ResultMap from './ResultMap.jsx';

export default function OneResult({route}) {

  const [reviews, setReviews] = useState([]);
  const results = route.params.results;
  const index = Math.floor(Math.random() * results.length);
  const result = results[index];
  const latitude = result.coordinates.latitude;
  const longitude = result.coordinates.longitude;

  // useEffect(() => {
  //   // console.log(result)
  //   fetch('http://localhost:3000/images', {
  //     headers: {
  //       'Content-Type': "application/json",
  //     },
  //     method: 'post',
  //     body: JSON.stringify({url: result.url})
  //   })
  // }, [])

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
    .then((response) => {
      // console.log(response)
      setReviews(response)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <View style={styles.resultList}>
      <View key={result.id} style={styles.resultEntry}>
        <Text style={{fontSize: 18, alignItems:'center', justifyContent:'center'}}>{result.name}</Text>
        <View style={styles.resultDetails}>
          <Text style={{fontSize: 14, }}>
            {_.reduce(result.categories, (memo, category, index) => {
              index === 0 ? stringLength = 0 : null;
              stringLength += (category.title.length + 1);
              return index < result.categories.length-1  ? memo += category.title +'/' : memo += category.title
            }, '')}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 14, paddingTop: 3}}> {result.rating} ★</Text>
            <Text style={{fontSize: 14, paddingTop: 3}}> | {Math.round(result.distance)} meters</Text>
          </View>
        </View>
      </View>
      <ResultMap latitude={latitude} longitude={longitude}/>
      <ResultInfo reviews={reviews}/>
    </View>
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
    height: 90,
    borderRadius: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    justifyContent:'space-around',
    alignItems: 'center',
    padding: 10,
    marginBottom:10
  },
  resultList: {
    padding:15
  }
});