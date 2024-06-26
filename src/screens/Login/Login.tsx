import { StyleSheet, Text, View, Dimensions, Pressable } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import routes from '../../constants/routes';
import Button from '../../components/common/Button';
import TextField from '../../components/common/TextField';
import GoogleLogin from '../../components/login/GoogleLogin';
import apis from '../../constants/config';
import { storeData } from '../../util/storage';
import Password from '../../components/common/Password';
import { setCalendar } from '../../util/auth';

export default function Login() {
    const [error, setError] = React.useState('');
	const [loading, setLoading] = React.useState(false);

    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');

    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    const onPressHandlerSignup = () => {
      navigation.replace(routes.SIGNUP);
    };  

    const onPressHandlerLogin = (email: String) => {
      setCalendar(email);
      navigation.replace(routes.MAIN_STACK);
    };  

    const onPressHandlerReset = () => {
      navigation.push(routes.RESET_STACK);
    };  

    const emailCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const handleLogin = () => {
        if(email!='' && password!='') {
            if(emailCheck.test(email))
            axios.post(apis.BASE_URL+'auth/login', {
                email: email.toLowerCase(),
                password: password
            })
            .then(response => {
                console.log(response);
                storeData('user', response.data.user.email).then(()=>{
                    storeData('token', response.data.token).then(()=> {
                        onPressHandlerLogin(response.data.user.email);
                    })
                })
            })
            .catch(error => {
                console.log(error);
                setError(error.response.data.message);
            })
            else
            setError('Invalid Email Address.');
        }   
    }

    const createCalendarEvent = async (accessToken) => {
    try {
        // Example event data
        const event = {
        summary: 'Event Name',
        start: { dateTime: '2024-04-04T21:00:00' },
        end: { dateTime: '2024-04-05T12:00:00' },
        };

        // Make API call to create event
        const response = await axios.post(
        'xxxx',
        event,
        // {
        //   headers: {
        //     Authorization: `Bearer ${accessToken}`,
        //   },
        // }
        );

        console.log('Event created:', response.data);
    //   Alert.alert('Success', 'Event created successfully.');
    } catch (error) {
        console.error('Error creating event:', error);
    //   Alert.alert('Error', 'Failed to create event.');
    }
    };

  return (
    <View style={styles.container}>
        <View>
            <Text style={[styles.normaltext, styles.heading]}>Login to your account.</Text>
            <Text style={[styles.subline]}>Please sign in to your account</Text>
        </View>
        <View>
            <TextField handleChange={setEmail} title={'Email Address'} placeholder={'Enter Email'} />
            <Password handleChange={setPassword} title={'Password'} placeholder={'Enter Password'} />
            <Text style={styles.error}>{error}</Text>
            <Pressable onPress={onPressHandlerReset}>
                <Text style={[styles.orangetext, {textAlign: 'right'}]}>Forgot password?</Text>
            </Pressable>
            <Button handlePress={handleLogin} title={'Sign In'} />
            <GoogleLogin />
            <View>
                <Pressable onPress={onPressHandlerSignup} style={styles.signwith}>
                    <Text style={styles.normaltext}>Don't have an account? </Text>
                    <Text style={styles.orangetext}>Register</Text>
                </Pressable>
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
        color: '#FE8C00',
        fontSize: 15,
        fontWeight: "400",
        paddingVertical: 20
    },
    signwith: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
    },
    error: {
        color: 'red',
        fontSize: 15,
        width: '100%',
        height: 20
    },
    container: {
        backgroundColor: 'white',
        height: Dimensions.get('screen').height,
        padding: 20
    }

})