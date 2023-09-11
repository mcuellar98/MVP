import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SelectCriteria from './client/SelectCriteria.jsx';

export default function App() {
  return (

    <View style={styles.container}>
      <SelectCriteria styles={styles}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  selectionContainer: {
    flexDirection: 'col',
    height: '30%',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'black'
  },
  styleSelector: {
    borderWidth: 1,
    borderColor: 'black'
  },
  priceSelector: {
    borderWidth: 1,
    borderColor: 'black'
  },
  radiusSelector: {
    borderWidth: 1,
    borderColor: 'black'
  },
  locationSelector: {
    borderWidth: 1,
    borderColor: 'black'
  }
});
