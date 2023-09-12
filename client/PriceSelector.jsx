import { StyleSheet, Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';

export default function PriceSelector({styles, prices, setPrices}) {
  return (
    <View style={styles.priceSelector}>
      <Text>Choose price</Text>
      <Text>
      <RadioButton
        value="$"
        status={ prices.includes('$') ? 'checked' : 'unchecked' }
        onPress={!prices.includes('$') ? () => setPrices(prices => [...prices,'$']) :
        () => {setPrices(prices.filter((element) => element !== '$'))}}
      />
      $
      </Text>
      <Text>
      <RadioButton
        value="$$"
        status={ prices.includes('$$') ? 'checked' : 'unchecked' }
        onPress={!prices.includes('$$') ? () => setPrices(prices => [...prices,'$$']) :
        () => {setPrices(prices.filter((element) => element !== '$$'))}}
      />
        $$
      </Text>
      <Text>
      <RadioButton
        value="$$$"
        status={ prices.includes('$$$') ? 'checked' : 'unchecked' }
        onPress={!prices.includes('$$$') ? () => setPrices(prices => [...prices,'$$$']) :
        () => {setPrices(prices.filter((element) => element !== '$$$'))}}
      />
      $$$
      </Text>
      <Text>
      <RadioButton
        value="$$$$"
        status={ prices.includes('$$$$') ? 'checked' : 'unchecked' }
        onPress={!prices.includes('$$$$') ? () => setPrices(prices => [...prices,'$$$$']) :
        () => {setPrices(prices.filter((element) => element !== '$$$$'))}}
      />
      $$$$
      </Text>
    </View>
  );
}