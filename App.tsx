import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
 
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Rootnavigator } from '~/navigator/Rootnavigator';
export default function App() {
  return (
<NavigationContainer>
 <Rootnavigator/>
<StatusBar style="inverted" />
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
  im: {
    width: 200, height: 200,
    alignItems: "center",
    padding: "50%",
    position: "relative",
    alignContent: "center",
  }

});
