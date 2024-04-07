import { StyleSheet, Text, View, TextInput, Pressable, Dimensions } from 'react-native'
import React from 'react'

export default function Forget() {
  return (
    <View style={styles.container}>
        <View>
            <Text style={[styles.normaltext, styles.heading]}>Forgot Password?</Text>
            <Text style={[styles.subline]}>Enter your email address and we’ll send you confirmation code to reset your password</Text>
        </View>
        <View>
            <View>
                <Text style={styles.normaltext}>Email Address</Text>
                <TextInput style={styles.inputbox} placeholder='Enter Email' placeholderTextColor={'grey'} />
            </View>
            <Pressable style={styles.button} onPress={()=>{}} >
                <Text>Sign In</Text>
            </Pressable>
            
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