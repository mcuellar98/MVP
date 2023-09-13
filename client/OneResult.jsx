import { StyleSheet, Text, View, FlatList, ScrollView} from 'react-native';
import _ from 'underscore';

export default function OneResult({route}) {

  var results = route.params.results;
  var index = Math.floor(Math.random() * results.length);
  var result = results[index];

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
              <Text style={{fontSize: 14}}> {result.rating}★</Text>
              <Text style={{fontSize: 14}}> | {Math.round(result.distance)} meters</Text>
           </View>
          </View>
        </View>
        <View style={styles.extraInfo}>
        </View>
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
  },
  extraInfo: {
    borderWidth: 1,
    height: 400,
    borderRadius: 20
    // height: 200
  }
});