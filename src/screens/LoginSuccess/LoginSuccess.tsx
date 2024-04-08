import { StyleSheet, Text, View, ScrollView, Image, Button, Pressable } from 'react-native'
import React, { useEffect, useRef } from 'react'
import RBSheet from 'react-native-raw-bottom-sheet';
import Success from '../../assets/success';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';
import routes from '../../constants/routes';

export default function LoginSuccess() {
    const refScrollable = useRef();

    useEffect(()=>{
        refScrollable.current.open()
    }, []);

    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    const onPressHandler = () => {
      navigation.replace(routes.LOGIN);
    }; 

    const signOut = async () => {
        try {
          await GoogleSignin.signOut();
          onPressHandler();
        } catch (error) {
          console.error(error);
        }
      }

    return (
        <View>
            <Image style={{position: 'absolute'}} source={require('../../assets/bg1.png')} />
      <RBSheet
        ref={refScrollable}
        height={460}
        draggable={false}
        closeOnPressMask={false}
        customModalProps={{
          animationType: 'none',
          statusBarTranslucent: true,
        }}
        customStyles={{
            wrapper: {

            },
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
          draggableIcon: {
            width: 80,
          },
        }}>
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <View style={styles.topspace}></View>
            <Success />
            <View>
                <Text style={[styles.text, styles.heading]}>Login Successful</Text>
                <Text style={[styles.text, styles.subline]}>An event has been created and the invite has been sent to you on mail.</Text>
            </View>
            <Pressable style={styles.button} onPress={signOut}>
                <Text style={{textAlign: 'center'}}>Logout</Text>
            </Pressable>
        </View>
      </RBSheet>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 20,
        backgroundColor: 'orange',
        borderRadius: 50,
        width: '85%',
        marginVertical: 35
    },
    heading: {
        fontSize: 30,
        fontWeight: '500',
        paddingVertical: 20
    },
    subline: {
        paddingHorizontal: 20,
        color:'grey'
    },
    text: {
        color: 'black',
        textAlign: 'center'
    },
    topspace: {
        paddingVertical: 20
    }
})