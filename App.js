import {StyleSheet, Text, View, Button, StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import {LogBox} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './Components/Screen/HomeScreen';
import TabNavigation from './Components/Navigation/TopNavigation/TabNavigation';
import DrawerNavigation from './Components/Navigation/DrawerNavigation/DrawerNavigation';
const App = () => {
  // .....to aviod guture handler warning......
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  ]);
  // .....to aviod guture handler warning......

  return (
    <View style={{flex: 1}}>
      <StatusBar animated={true} backgroundColor="#121826" />
      <NavigationContainer>
        <DrawerNavigation />
      </NavigationContainer>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
