/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Login from './src/screens/Login/Login';
import Signup from './src/screens/Signup/Signup';
import LoginSuccess from './src/screens/LoginSuccess/LoginSuccess';


function App(): React.JSX.Element {

  return (
    <SafeAreaView>
      <LoginSuccess />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;