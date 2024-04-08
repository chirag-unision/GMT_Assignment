import { StyleSheet, Text, View, TextInput, Pressable, Dimensions } from 'react-native'
import React from 'react'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { useNavigation } from '@react-navigation/native';
import routes from '../../constants/routes';

export default function Otp() {
    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    const onPressHandlerContinue = () => {
      navigation.replace(routes.RESET);
    }; 
  return (
    <View style={styles.container}>
        <View>
            <Text style={[styles.normaltext, styles.heading]}>Email Verification</Text>
            <Text style={[styles.subline]}>Enter the verification code we send you on: Alberts******@gmail.com|</Text>
        </View>
        <View>
            <View>
            <OTPInputView
                style={{width: '80%', height: 200}}
                pinCount={4}
                // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                // onCodeChanged = {code => { this.setState({code})}}
                autoFocusOnLoad
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeFilled = {(code => {
                    console.log(`Code is ${code}, you are good to go!`)
                })}
            />
            </View>
            <View style={styles.signwith}>
                <Text style={styles.normaltext}>Didn't receive code? </Text>
                <Text style={styles.orangetext}>Resend</Text>
            </View>
            <View  style={styles.signwith}>
                <Text  style={styles.normaltext}>Or sign in with</Text>
            </View>
            <Pressable style={styles.button} onPress={onPressHandlerContinue} >
                <Text>Continue</Text>
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
    },
    textInputContainer: {
        marginBottom: 20,
      },
      roundedTextInput: {
        borderRadius: 10,
        borderWidth: 4,
      },



      borderStyleBase: {
        width: 30,
        height: 45
      },
    
      borderStyleHighLighted: {
        borderColor: "#03DAC6",
      },
    
      underlineStyleBase: {
        width: 40,
        height: 45,
        borderWidth: 1,
        borderRadius: 10
      },
    
      underlineStyleHighLighted: {
        borderColor: "#000",
      }

})