import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React, {useState} from 'react'; 
import HomeScreen from "./components/HomeScreen.js";
import Calendar from "./components/CalendarScreen.js";




const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen options={{headerShown: false}} name="HomeScreen" component={HomeScreen} />
        <Stack.Screen options={{headerShown: false}} name="CalendarScreen" component={Calendar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
