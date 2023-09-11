import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';

export default function StyleSelector({styles}) {

  const [terms, setTerms] = useState('')

  const termChange = (e) => {
    setTerms(e.target.value);
  }

  return (
    <View style={styles.styleSelector}>
      <TextInput
        placeholder="What are you looking for (bar, restaurant, bakery, etc)"
        onChange={termChange}
      />
    </View>
  );
}