import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import routes from '../../constants/routes';
import TextField from '../../components/common/TextField';
import Button from '../../components/common/Button';
import axios from 'axios';
import apis from '../../constants/apis';

export default function Forget() {
    const [email, setEmail]= useState('');
    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    const onPressHandlerOtp = (pid: String) => {
      navigation.replace(routes.OTP, { pid });
    }; 

    const handleEmailVerification = () => {
        if(email!='') {
            axios.post(apis.BASE_URL+'auth/sendOtp', {
                email: email
            })
            .then(response => {
                console.log(response.data.message);
                onPressHandlerOtp(response.data.pid);
            })
            .catch(error => {
                console.log(error);
            })
        } 
    }
  return (
    <View style={styles.container}>
        <View>
            <Text style={[styles.normaltext, styles.heading]}>Forgot Password?</Text>
            <Text style={[styles.subline]}>Enter your email address and we’ll send you confirmation code to reset your password</Text>
        </View>
        <View style={{flex: 1}}>
            <TextField title={'Email Address'} placeholder={'Enter Email'} handleChange={setEmail} />
            <View style={styles.buttonBox}>
                <Button title={'Continue'} handlePress={handleEmailVerification} />
            </View>
            
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    normaltext: {
        color: '#000'
    },
    heading: {
        fontSize: 35,
        fontWeight: "500",
        paddingTop: 30,
        paddingRight: 50
    },
    subline: {
        fontSize: 15,
        paddingVertical: 5,
        paddingBottom: 40,
        color: 'grey'
    },
    orangetext: {
        color: 'orange',
        fontSize: 15,
        fontWeight: "400",
        paddingVertical: 20
    },
    container: {
        backgroundColor: 'white',
        height: '100%',
        padding: 20
    },
    buttonBox: {
        position: 'absolute',
        bottom: 10,
        width: '100%',
    }

})