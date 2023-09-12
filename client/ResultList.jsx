import { StyleSheet, Text, View, FlatList} from 'react-native';
// import { useState } from 'react';

export default function ResultList({results}) {

  return (
    <View>
      {results.slice(0, 10).map((result) => (
        <View>
          <Text>{result.name}</Text>
        </View>
      ))}
    </View>
  )
};