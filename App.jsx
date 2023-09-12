import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SelectCriteria from './client/SelectCriteria.jsx';

export default function App() {
  return (

    <View style={styles.appContainer}>
      <SelectCriteria styles={styles}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',

    // width: '50%',
    alignItems: 'center'
  },
  selectionContainer: {
    flexDirection: 'col',
    // height: '30%',
    justifyContent: 'space-between',
    // borderWidth: 1,
    // borderColor: 'black'
  },
  styleSelector: {
    // borderWidth: 1,
    // borderColor: 'black'
  },
  priceSelector: {
    // borderWidth: 1,
    // borderColor: 'black'
  },
  radiusSelector: {
    // borderWidth: 1,
    // borderColor: 'black'
  },
  locationSelector: {
    // borderWidth: 1,
    // borderColor: 'black'
  },
  textInput: {
    marginBottom: '3%',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 15,
    padding: 15,
    fontSize: 16
  },
  stateInput: {
    width: '100px',
    marginBottom:'3%'
  },
  locPermission: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '3%',
    marginTop: '3%'
  }
});
