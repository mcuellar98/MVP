import { StyleSheet, Text, View, FlatList, ScrollView} from 'react-native';
import _ from 'underscore';
import { useState } from 'react';

export default function ResultInfo({reviews}) {

  return (
    <View style={styles.extraInfo}>
      <Text style={{marginBottom: 20}}t>Recent Reviews</Text>
      <View>
        {reviews.slice(0,2).map((review) => {
        return (
            <Text style={{marginBottom: 20}}>{review.rating}★: {review.text}</Text>
        )
        })}
      </View>
    </View>
    )
  }

const styles = StyleSheet.create({
  extraInfo: {
    borderWidth: 1,
    height: 'auto',
    borderRadius: 20,
    backgroundColor: 'white',
    padding: 20,
    marginBottom:10
  }
});