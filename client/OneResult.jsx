import { StyleSheet, Text, View, FlatList, ScrollView} from 'react-native';
import _ from 'underscore';

export default function OneResult({route}) {

  var results = route.params.results;

  return (
    <ScrollView>
      {results.slice(0, 1).map((result) => (
        <View key={result.id} style={styles.resultEntry}>
          <Text style={{fontSize: 18, alignItems:'center', justifyContent:'center'}}>{result.name}</Text>
          <View style={styles.resultDetails}>
            <Text style={{fontSize: 14,}}>
              {_.reduce(result.categories, (memo, category, index) => {
                return index < result.categories.length-1  ? memo += category.title +'/' : memo += category.title
            }, '')}</Text>
            <Text style={{fontSize: 14,}}> | {result.rating}★</Text>
            <Text style={{fontSize: 14,}}> | {Math.round(result.distance)} meters</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  resultDetails: {
    flexDirection: 'row',
  },
  resultEntry: {
    flexDirection: 'col',
    height: 90,
    borderRadius: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    justifyContent:'space-around',
    alignItems: 'center',
    padding: 5
  }
});