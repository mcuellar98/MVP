import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, SafeAreaView } from 'react-native';
import SelectCriteria from './client/SelectCriteria.jsx';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './client/HomeScreen.jsx';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Icon } from 'react-native-elements'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SurpriseScreen from './client/SurpriseScreen.jsx';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  const navTheme = {
    colors: {
      background: "white"
    }
  };

  return (
    <NavigationContainer theme={navTheme}>
      <Tab.Navigator
      barStyle={{ backgroundColor: '#FF8464' }}
      activeColor="black"
      inactiveColor="black"

      >
      <Tab.Screen
          name="Home Tab"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            // barTintColor: 'white',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            )
          }}
        />
      <Tab.Screen
          name="Settings"
          component={SurpriseScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="cog" color={color} size={26} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


