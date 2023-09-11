import { StyleSheet, Text, View } from 'react-native';
import StyleSelector from './StyleSelector';
import PriceSelector from './PriceSelector';
import RadiusSelector from './RadiusSelector';
import LocationSelector from './LocationSelector';

export default function SelectCriteria({styles}) {
  return (
    <View style={styles.selectionContainer} >
      <LocationSelector styles={styles}/>
      <StyleSelector styles={styles}/>
      <PriceSelector styles={styles}/>
      <RadiusSelector styles={styles}/>
    </View>
  );
}