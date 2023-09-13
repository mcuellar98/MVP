import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, SafeAreaView } from 'react-native';
import SelectCriteria from './client/SelectCriteria.jsx';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './client/HomeScreen.jsx';
import { useFonts, FredokaOne_400Regular } from '@expo-google-fonts/fredoka-one';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Icon } from 'react-native-elements'

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    FredokaOne_400Regular,
  });
  return (
    <NavigationContainer>
      <Tab.Navigator
      // initialRouteName="Home"
      // screenOptions={{
        // activeTintColor: 'green',
        // tabBarStyle: {
          // backgroundColor: '#b3b3b3',
          // borderTopColor: 'transparent'
      //   }
      // }}
        >
      <Tab.Screen
          name="Home Tab"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            backgroundColor: 'white'
            // tabBarIcon: ({ color, size }) => (
            //   <MaterialCommunityIcons name="home" color={color} size={size} />
            // ),
          }}
        />
        {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}


