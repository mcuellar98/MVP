import { StyleSheet, Text, View } from 'react-native';
import Slider from "react-native-sliders";

export default function RadiusSelector({styles, radius, setRadius}) {

  const handleSliderChange = (value) => {
    setRadius(value);
  }

  return (
    <View style={styles.radiusSelector}>
      <Text style={{fontSize: 18, marginBottom: 20}}>
        Radius: {radius} Mile(s)
      </Text>
      <Slider
          value={radius}
          onValueChange={(value) => handleSliderChange(value)}
          minimumValue={1}
          maximumValue={5}
          step={1}
          thumbStyle={{width: 40, height: 40, borderRadius: 40}}
          maximumTrackStyle={{height: 15, borderRadius: 10}}
          minimumTrackStyle={{height: 15, borderRadius: 10}}
        />
    </View>
  );
}