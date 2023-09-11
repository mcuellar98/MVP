import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { RadioButton } from 'react-native-paper';

export default function PriceSelector({styles}) {

  const [checked, setChecked] = useState([]);

  return (
    <View style={styles.priceSelector}>
      <Text>Choose price</Text>
      <Text>
      <RadioButton
        value="$"
        status={ checked.includes('$') ? 'checked' : 'unchecked' }
        onPress={!checked.includes('$') ? () => setChecked(checked => [...checked,'$']) :
        () => {setChecked(checked.filter((element) => element !== '$'))}}
      />
      $
      </Text>
      <Text>
      <RadioButton
        value="$$"
        status={ checked.includes('$$') ? 'checked' : 'unchecked' }
        onPress={!checked.includes('$$') ? () => setChecked(checked => [...checked,'$$']) :
        () => {setChecked(checked.filter((element) => element !== '$$'))}}
      />
        $$
      </Text>
      <Text>
      <RadioButton
        value="$$$"
        status={ checked.includes('$$$') ? 'checked' : 'unchecked' }
        onPress={!checked.includes('$$$') ? () => setChecked(checked => [...checked,'$$$']) :
        () => {setChecked(checked.filter((element) => element !== '$$$'))}}
      />
      $$$
      </Text>
      <Text>
      <RadioButton
        value="$$$$"
        status={ checked.includes('$$$$') ? 'checked' : 'unchecked' }
        onPress={!checked.includes('$$$$') ? () => setChecked(checked => [...checked,'$$$$']) :
        () => {setChecked(checked.filter((element) => element !== '$$$$'))}}
      />
      $$$$
      </Text>
    </View>
  );
}