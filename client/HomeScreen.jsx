import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, SafeAreaView, View } from 'react-native';
import SelectCriteria from './SelectCriteria.jsx';
import {createStackNavigator} from '@react-navigation/stack';
import ResultList from './ResultList.jsx';
import OneResult from './OneResult.jsx'
import { useState } from 'react';

const Stack = createStackNavigator();

export default function HomeScreen() {

  return (
    <Stack.Navigator screenOptions={{
      headerShown: true
    }}
    >
    <Stack.Screen
      name="Home"
      component={SelectCriteria}
      options={{
        title: 'Food Findr',
        headerStyle: {
          backgroundColor: '#FF8464',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontSize: 30,
          fontWeight: 'bold',
          fontFamily: 'FredokaOne_400Regular',
        }
      }}
      />
      <Stack.Screen
        name="Results"
        component={ResultList}
        options={{
          headerStyle: {
            backgroundColor: '#FF8464',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 30,
            fontWeight: 'bold',
            fontFamily: 'FredokaOne_400Regular',
          },
          gestureDirection:'horizontal'
        }}
      />
      <Stack.Screen
        name="OneResult"
        component={OneResult}
        options={{
          title: 'Feeling Lucky',
          headerStyle: {
            backgroundColor: '#FF8464',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 30,
            fontWeight: 'bold',
            fontFamily: 'FredokaOne_400Regular',
          },
          gestureDirection:'horizontal-inverted'
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  resultDetails: {
    flexDirection: 'row',
  },
  resultEntry: {
    flexDirection: 'col',
    height: 90,
    borderRadius: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    justifyContent:'space-around',
    alignItems: 'center',
    padding: 5
  }
});

