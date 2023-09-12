import { StyleSheet, Text, View, TextInput } from 'react-native';
// import { useState } from 'react';

export default function StyleSelector({styles, setTerms}) {

  // const [terms, setTerms] = useState('')

  const termChange = (value) => {
    setTerms(value);
  }

  return (
    <View style={styles.styleSelector}>
      <TextInput style={styles.textInput}
        placeholder="What are you looking for (bar, restaurant, bakery, etc)"
        onChangeText={value => termChange(value)}
      />
    </View>
  );
}