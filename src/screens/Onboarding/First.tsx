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
import React from 'react';

const OnBoardingFirst = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const onPressHandler = () => {
    navigation.replace(Routes.ON_BOARD_SCREEN_2);
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
          <View style={[styles.dash, {backgroundColor: 'white'}]}></View>
          <View style={[styles.dash, {backgroundColor: 'grey'}]}></View>
          <View style={[styles.dash, {backgroundColor: 'grey'}]}></View>
        </View>
        <View style={[{flexDirection: 'row', justifyContent: 'space-between', width: '100%', position: 'absolute', bottom: 35}]}>
          <Text>{'Skip'}</Text>
          <Pressable onPress={onPressHandler} >
            <Text>{'Next ->'}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default OnBoardingFirst;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1B1B',
    alignItems: 'center',
    height: Dimensions.get('screen').height,
    width: '100%'
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
});
