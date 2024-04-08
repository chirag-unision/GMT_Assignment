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
import OnBoardingFirst from './src/screens/Onboarding/First';
import OnBoardingSecond from './src/screens/Onboarding/Second';
import OnBoardingThird from './src/screens/Onboarding/Third';
import Forget from './src/screens/ForgetPassword/Forget';
import Otp from './src/screens/ForgetPassword/Otp';
import Reset from './src/screens/ForgetPassword/Reset';
import OnBoardingStack from './src/screens/Navigation/OnboardingStack';
import { NavigationContainer } from '@react-navigation/native';


function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <OnBoardingStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default App;