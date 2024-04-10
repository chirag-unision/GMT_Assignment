import { StyleSheet, Text, View, TextInput, Pressable, Dimensions } from 'react-native'
import React, { useState } from 'react'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { useNavigation } from '@react-navigation/native';
import routes from '../../constants/routes';
import Button from '../../components/common/Button';
import axios from 'axios';
import apis from '../../constants/apis';

export default function Otp({route}:any) {
    const [code, setCode]= useState('');
    const { pid } = route.params;
    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    const onPressHandlerContinue = (uid: String) => {
      navigation.replace(routes.RESET, {uid});
    }; 
    console.log('pid: '+pid);
    const handleOtpVerification = () => {
        if(code!='') {
            axios.post(apis.BASE_URL+'auth/verifyOtp', {
                pid: pid,
                otp: code
            })
            .then(response => {
                console.log(response.data.message);
                onPressHandlerContinue(response.data.user.uid)
            })
            .catch(error => {
                console.log(error);
            })
        } 
    }
  return (
    <View style={styles.container}>
        <View>
            <Text style={[styles.normaltext, styles.heading]}>Email Verification</Text>
            <Text style={[styles.subline]}>Enter the verification code we send you on: Alberts******@gmail.com|</Text>
        </View>
        <View style={{flex: 1}}>
            <View>
            <OTPInputView
                style={{width: '80%', marginHorizontal: '10%', height: 100}}
                pinCount={4}
                // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                // onCodeChanged = {code => { this.setState({code})}}
                autoFocusOnLoad
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeFilled = {(code => {
                    setCode(code);
                    console.log(`Code is ${code}, you are good to go!`)
                })}
            />
            </View>
            <View style={styles.signwith}>
                <Text style={styles.normaltext}>Didn't receive code? </Text>
                <Text style={styles.orangetext}>Resend</Text>
            </View>
            <View  style={styles.signwith}>
                <Text  style={styles.normaltext}>06:00</Text>
            </View>
            <View style={styles.buttonBox}>
                <Button title={'Continue'} handlePress={handleOtpVerification} />
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
        backgroundColor: 'white',
        height: '100%',
        padding: 20
    },
    textInputContainer: {
        marginBottom: 20,
    },
    roundedTextInput: {
        borderRadius: 10,
        borderWidth: 4,
    },
    buttonBox: {
        position: 'absolute',
        bottom: 10,
        width: '100%',
    },



      borderStyleBase: {
        width: 30,
        height: 45
      },
    
      borderStyleHighLighted: {
        borderColor: "#03DAC6",
      },
    
      underlineStyleBase: {
        width: 60,
        height: 65,
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 20,
        color: '#000'
      },
    
      underlineStyleHighLighted: {
        borderColor: "#000",
      }

})