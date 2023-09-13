import { StyleSheet, Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import React, { useMemo, useState } from 'react';

export default function PriceSelector({styles, prices, setPrices}) {

  const [selectedId1, setSelectedId1] = useState();
  const [selectedId2, setSelectedId2] = useState();
  const [selectedId3, setSelectedId3] = useState();
  const [selectedId4, setSelectedId4] = useState();

  return (
    <View style={styles.priceContainer}>
      <Text style={{fontSize: 18, paddingBottom: 10}}>Choose Price(s)</Text>
      <View style={styles.priceSelector}>
        <View style={styles.priceOption}>
          <RadioButton
            borderWidth='1'
            value="$"
            status={ prices.includes('$') ? 'checked' : 'unchecked' }
            onPress={!prices.includes('$') ? () => setPrices(prices => [...prices,'$']) :
            () => {setPrices(prices.filter((element) => element !== '$'))}}
          />
          <Text style={{fontSize: 20, paddingTop: 5}}>$</Text>
        </View>
        <View style={styles.priceOption}>
          <RadioButton
            borderWidth='1'
            value="$$"
            status={ prices.includes('$$') ? 'checked' : 'unchecked' }
            onPress={!prices.includes('$$') ? () => setPrices(prices => [...prices,'$$']) :
            () => {setPrices(prices.filter((element) => element !== '$$'))}}
          />
         <Text style={{fontSize: 20, paddingTop: 5}}>$$</Text>
        </View>
        <View style={styles.priceOption}>
          <RadioButton
            borderWidth='1'
            value="$$$"
            status={ prices.includes('$$$') ? 'checked' : 'unchecked' }
            onPress={!prices.includes('$$$') ? () => setPrices(prices => [...prices,'$$$']) :
            () => {setPrices(prices.filter((element) => element !== '$$$'))}}
          />
          <Text style={{fontSize: 20, paddingTop: 5}}>$$$</Text>
         </View>
         <View style={styles.priceOption}>
          <RadioButton
            borderWidth='1'
            value="$$$$"
            status={ prices.includes('$$$$') ? 'checked' : 'unchecked' }
            onPress={!prices.includes('$$$$') ? () => setPrices(prices => [...prices,'$$$$']) :
            () => {setPrices(prices.filter((element) => element !== '$$$$'))}}
          />
          <Text style={{fontSize: 20, paddingTop: 5}}>$$$$</Text>
        </View>
      </View>
    </View>
  );
}