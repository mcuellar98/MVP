import { StyleSheet, Text, View } from 'react-native';
import Slider from "react-native-sliders";
// import { useState } from 'react';

export default function RadiusSelector({styles, radius, setRadius}) {

  // const [radius, setRadius] = useState(1);

  const handleSliderChange = (value) => {
    setRadius(value);
  }

  return (
    <View style={styles.radiusSelector}>
      <Text>choose radius</Text>
      <Slider
          value={radius}
          onValueChange={(value) => handleSliderChange(value)}
          minimumValue={1}
          maximumValue={5}
          step={1}
        />
        <Text>
          Radius: {radius} miles
        </Text>
    </View>
  );
}