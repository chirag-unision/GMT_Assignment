/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
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
import { getData } from './src/util/storage';
import LoginStack from './src/screens/Navigation/LoginStack';
import HomeStack from './src/screens/Navigation/MainStack';
import { getCurrentUser } from './src/util/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import axios from 'axios';
import apis from './src/constants/apis';


function App(): React.JSX.Element {
  const [loginStatus, setLoginStatus]= useState(true);
  const [auth, setAuth]= useState(true);
  const [onboarded, setOnboarded]= useState(true);


  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '689329845646-p41j4fsloj8atc83dsvou65du2ju3fn4.apps.googleusercontent.com',
      scopes: ['profile', 'email'],
    });
    
    getData('onboarded').then(resp => {
      if(!resp) {
        setOnboarded(false)
      }
    })
    getData('token').then(resp => {
      if(!resp) {
        setLoginStatus(false)
      } else {
        axios.post(apis.BASE_URL+'auth/validateToken', {
            token: resp
        }).then(response => {
          if(!response.data.status)
          setLoginStatus(false)
        })
      }
    })
    getCurrentUser().then(resp => {
      if(!resp) {
        setAuth(false)
      }
    })
  }, [])

  return (
    <NavigationContainer>
      {onboarded ? (loginStatus || auth ? <HomeStack /> : <LoginStack />) : <OnBoardingStack />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default App;