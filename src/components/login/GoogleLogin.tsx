import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import GoogleIcon from '../../assets/google_logo';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export default function GoogleLogin() {
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
            console.log(apiError.message || 'Something went wrong');
		} finally {
			//
		}
	};

    return (
        <View>
            <View style={styles.signwith}>
                <View style={styles.dash}></View>
                <Text style={styles.normalText}>Or sign in with</Text>
                <View style={styles.dash}></View>
            </View>
            <Pressable onPress={handleGoogleLogin}>
                <GoogleIcon width={60} height={80} />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    normalText: {
        color: '#000'
    },
    dash: {
        width: '30%',
        height: 2,
        backgroundColor: '#EDEDED'
    },
    signwith: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 20,
    }
})