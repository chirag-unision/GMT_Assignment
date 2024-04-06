import { StyleSheet, Text, View, Dimensions, Pressable, TextInput } from 'react-native'
import React from 'react'
import GoogleIcon from '../../assets/google_logo';

export default function Signup() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={[styles.text, styles.heading]}>Create your new account.</Text>
                <Text style={[styles.subline]}>Create an account to start looking for the food you like</Text>
            </View>
            <View>
                <View>
                    <Text style={styles.text}>Email Address</Text>
                    <TextInput style={styles.inputbox} placeholder='Enter Email' placeholderTextColor={'grey'} />
                </View>
                {/* // */}
                <View>
                    <Text style={styles.text}>User Name</Text>
                    <TextInput style={styles.inputbox} placeholder='Enter Email' placeholderTextColor={'grey'} />
                </View>
                {/* // */}
                <View>
                    <Text style={styles.text}>Password</Text>
                    <TextInput style={styles.inputbox} placeholder='Enter Password' placeholderTextColor={'grey'} />
                </View>
                <Text style={[styles.orangetext]}>I Agree with Terms of Service and Privacy Policy</Text>
                <Pressable style={styles.button} onPress={()=>{}} >
                    <Text>Register</Text>
                </Pressable>
                <View  style={styles.signwith}>
                    <View style={styles.dash}></View>
                    <Text  style={styles.text}>Or sign in with</Text>
                    <View style={styles.dash}></View>
                </View>
                <View>
                    <GoogleIcon width={60} height={80} />
                </View>
                <View style={styles.signwith}>
                    <Text style={styles.text}>Don't have an account? </Text>
                    <Text style={styles.orangetext}>Register</Text>
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