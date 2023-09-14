import { StyleSheet, Text, View, FlatList, ScrollView, Pressable} from 'react-native';
import _ from 'underscore';
import { useRef, useEffect } from 'react';


export default function ResultList({route, navigation}) {

  var results = route.params.results;
  var stringLength = 0;
  var rowCol = 'row'
  results = _.sortBy(results, 'distance')

  const handlePress = () => {
    navigation.navigate('OneResult')
  }

  return (
    <ScrollView style={styles.resultList}>
      {results.slice(0, 10).map((result) => (
        <Pressable key={result.id} style={styles.resultEntry} onPress={handlePress}>
          <Text style={{fontSize: 18, alignItems:'center', justifyContent:'center'}}>{result.name}</Text>
          <View style={styles.resultDetails}>
            <Text style={{fontSize: 14, }}>
              {_.reduce(result.categories, (memo, category, index) => {
                index === 0 ? stringLength = 0 : null;
                stringLength += (category.title.length + 1);
                return index < result.categories.length-1  ? memo += category.title +'/' : memo += category.title
              }, '')}</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 14, paddingTop: 3}}> {result.rating}★</Text>
              <Text style={{fontSize: 14, paddingTop: 3}}> | {Math.round(result.distance * 0.0621371)/100} miles</Text>
           </View>
          </View>
        </Pressable>
      ))}
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