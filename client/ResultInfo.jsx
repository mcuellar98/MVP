import { StyleSheet, Text, View, FlatList, ScrollView} from 'react-native';
import _ from 'underscore';
import { useState } from 'react';
import moment from 'moment';

export default function ResultInfo({reviews}) {

  return (
    <View style={styles.extraInfo}>
      <Text style={{}}t>Recent Reviews</Text>
      <View>
        {reviews.slice(0,2).map((review) => {
        return (
          <View>
            <Text style={{paddingTop: 20, paddingBottom: 10}}>{review.rating}★: {review.text}</Text>
            <Text style={{paddingTop: 5, paddingBottom: 10}}>{review.user.name} | {moment(review.time_created).fromNow()}</Text>
          </View>
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