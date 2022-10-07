import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Authnavigation from './src/appnavigation/Authnavigation';

function App() {
  return (
    <NavigationContainer>
      <Authnavigation />
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({});
