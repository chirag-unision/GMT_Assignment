import { StyleSheet, Text, View, Dimensions, Pressable, TextInput } from 'react-native'
import React from 'react'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import axios from 'axios';
import GoogleIcon from '../../assets/google_logo';

export default function Login() {
    const [error, setError] = React.useState('');
	const [loading, setLoading] = React.useState(false);

    GoogleSignin.configure({
        webClientId: '689329845646-p41j4fsloj8atc83dsvou65du2ju3fn4.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
    });

    const GoogleLogin = async () => {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        return userInfo;
    };

    const handleGoogleLogin = async () => {
		setLoading(true);
		try {
			const response = await GoogleLogin();
			const { idToken, user } = response;

			if (idToken) {
                console.log(idToken);
				// const resp = await authAPI.validateToken({
				// 	token: idToken,
				// 	email: user.email,
				// });
				// await handlePostLoginData(resp.data);
			}
		} catch (apiError) {
			setError(
				apiError.message || 'Something went wrong'
			);
            console.log(apiError.message || 'Something went wrong');
		} finally {
			setLoading(false);
		}
	};

    const signOut = async () => {
        try {
          await GoogleSignin.signOut();
        } catch (error) {
          console.error(error);
        }
      };

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
            <View>
                <Text style={styles.normaltext}>Email Address</Text>
                <TextInput style={styles.inputbox} placeholder='Enter Email' placeholderTextColor={'grey'} />
            </View>
            {/* // */}
            <View>
                <Text style={styles.normaltext}>Password</Text>
                <TextInput style={styles.inputbox} placeholder='Enter Password' placeholderTextColor={'grey'} />
            </View>
            <Text style={[styles.orangetext]}>Forgot password?</Text>
            <Pressable style={styles.button} onPress={handleGoogleLogin} >
                <Text>Sign In</Text>
            </Pressable>
            <View  style={styles.signwith}>
                <View style={styles.dash}></View>
                <Text  style={styles.normaltext}>Or sign in with</Text>
                <View style={styles.dash}></View>
            </View>
            <View>
                <GoogleIcon width={60} height={80} />
            </View>
            <View style={styles.signwith}>
                <Text style={styles.normaltext}>Don't have an account? </Text>
                <Text style={styles.orangetext}>Register</Text>
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
    inputbox: {
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 20,
        paddingHorizontal: 10
    },
    dash: {
        width: '30%',
        height: 2,
        backgroundColor: 'grey'
    },
    signwith: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20
    },
    container: {
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'white',
        height: Dimensions.get('screen').height,
        padding: 20
    },
    button: {
        paddingVertical: 20,
        backgroundColor: 'orange',
        borderRadius: 50
    }

})