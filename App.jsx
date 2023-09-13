import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, SafeAreaView } from 'react-native';
import SelectCriteria from './client/SelectCriteria.jsx';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './client/HomeScreen.jsx';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Icon } from 'react-native-elements'

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  const navTheme = {
    colors: {
      background: "#fad8cf"
    }
  };

  return (
    <NavigationContainer theme={navTheme}>
      <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor:'#171717 '
        }
      }}>
      <Tab.Screen
          name="Home Tab"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            backgroundColor: 'white'
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


