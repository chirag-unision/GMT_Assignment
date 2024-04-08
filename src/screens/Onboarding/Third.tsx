import {useNavigation} from '@react-navigation/native';
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  Image,
  Dimensions,
} from 'react-native';
import Routes from '../../constants/routes';
import React, { useState } from 'react';

const OnBoardingThird = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const onPressHandler = () => {
    navigation.replace(Routes.LOGIN_STACK);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/bg1.png')}
        style={{
          width: '100%',
          height: Dimensions.get('window').height,
          position: 'absolute',
          zIndex: -10
        }}
      />
      <View style={styles.secondContainer}>
        <Text style={styles.text}>We serve incomparable delicacies</Text>
        <Text style={styles.subline}>All the best restaurants with their top menu waiting for you, they cant’t wait for your order!!</Text>
        <View style={styles.dashview}>
          <View style={[styles.dash, {backgroundColor: 'grey'}]}></View>
          <View style={[styles.dash, {backgroundColor: 'grey'}]}></View>
          <View style={[styles.dash, {backgroundColor: 'white'}]}></View>
        </View>
        <View style={[{flexDirection: 'row', justifyContent: 'center', width: '100%', position: 'absolute', bottom: 35}]}>
          <Pressable onPress={onPressHandler}><Text style={styles.fbutton}>{'->'}</Text></Pressable>
        </View>
      </View>
    </View>
  );
};

export default OnBoardingThird;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1B1B',
    alignItems: 'center',
  },
  secondContainer: {
    position: 'absolute',
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '10%',
    width: 280,
    height: 400,
    borderRadius: 60,
    top: 400
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '500'
  },
  subline: {
    fontSize: 15,
    paddingVertical: 10,

  },
  dashview: {
    flexDirection: 'row'
  },
  dash: {
    width: 25,
    height: 6,
    borderRadius: 10,
    margin: 2
  },
  fbutton: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 50,
    textAlign: 'center',
    color: 'black'
  }
});
