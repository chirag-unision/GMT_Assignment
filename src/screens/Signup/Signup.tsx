import { StyleSheet, Text, View, Dimensions, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import routes from '../../constants/routes';
import Button from '../../components/common/Button';
import TextField from '../../components/common/TextField';
import GoogleLogin from '../../components/login/GoogleLogin';
import axios from 'axios';
import apis from '../../constants/apis';

export default function Signup() {
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [username, setUsername]= useState('');

    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    const onPressHandlerLogin = () => {
      navigation.replace(routes.LOGIN);
    }; 

    const onPressHandlerSignup = () => {
      navigation.replace(routes.LOGIN_SUCCESS);
    }; 

    const handleSignup = () => {
        if(username!='' && email!='' && password!='') {
            axios.post(apis.BASE_URL+'auth/signup', {
                email: email,
                username: username,
                password: password
            })
            .then(response => {
                console.log(response);
                onPressHandlerSignup();
            })
            .catch(error => {
                console.log(error);
            })
        }   
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={[styles.text, styles.heading]}>Create your new account.</Text>
                <Text style={[styles.subline]}>Create an account to start looking for the food you like</Text>
            </View>
            <View>
                <TextField title={'Email Address'} placeholder={'Enter Email'} handleChange={setEmail} />
                <TextField title={'User Name'} placeholder={'Enter Username'} handleChange={setUsername} />
                <TextField title={'Password'} placeholder={'Enter Password'} handleChange={setPassword} />
                <Text style={[styles.orangetext]}>I Agree with Terms of Service and Privacy Policy</Text>
                <Button handlePress={handleSignup} title={'Register'} />
                <GoogleLogin />
                <View>
                    <Pressable onPress={onPressHandlerLogin} style={styles.signwith}>
                        <Text style={styles.text}>Have an account? </Text>
                        <Text style={styles.orangetext}>Sign In</Text>
                    </Pressable>
                </View>
                
            </View>
        </View>
      )
    }
    
    const styles = StyleSheet.create({
        text: {
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
        signwith: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 20
        },
        container: {
            backgroundColor: 'white',
            height: Dimensions.get('screen').height,
            padding: 20
        },
    
    })