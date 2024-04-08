import { StyleSheet, Text, View, ScrollView, TextInput, Pressable, Dimensions } from 'react-native'
import React, { useRef } from 'react'
import RBSheet from 'react-native-raw-bottom-sheet'
import Success from '../../assets/success';
import { useNavigation } from '@react-navigation/native';
import routes from '../../constants/routes';

export default function Reset() {
    const refScrollable = useRef();

    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    const onPressHandlerReset = () => {
      navigation.replace(routes.LOGIN_STACK);
    }; 

    return (
        <View style={styles.container}>
            <View>
                <Text style={[styles.normaltext, styles.heading]}>Reset Password</Text>
                <Text style={[styles.subline]}>Your new password must be different from the previously used password</Text>
            </View>
            <View>
                <View>
                    <Text style={styles.normaltext}>New Password</Text>
                    <TextInput style={styles.inputbox} placeholder='Enter Email' placeholderTextColor={'grey'} />
                    <Text style={[styles.subline]}>Must be at least 8 character</Text>
                </View>
                {/* // */}
                <View>
                    <Text style={styles.normaltext}>Confirm Password</Text>
                    <TextInput style={styles.inputbox} placeholder='Enter Password' placeholderTextColor={'grey'} />
                    <Text style={[styles.subline]}>Both password must match</Text>
                </View>
                <Pressable style={styles.button} onPress={() => refScrollable.current.open()} >
                    <Text>Sign In</Text>
                </Pressable>
            </View>
            <RBSheet
                ref={refScrollable}
                height={460}
                draggable
                closeOnPressMask={false}
                customModalProps={{
                    animationType: 'slide',
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
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <View style={styles.topspace}></View>
                    <Success />
                    <View>
                        <Text style={[styles.text, styles.headingR]}>Login Successful</Text>
                        <Text style={[styles.text, styles.sublineR]}>An event has been created and the invite has been sent to you on mail.</Text>
                    </View>
                    <Pressable style={styles.buttonR} onPress={onPressHandlerReset}>
                        <Text style={{ textAlign: 'center' }}>Go to Login</Text>
                    </Pressable>
                </View>
            </RBSheet>
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
        borderRadius: 50,
    },
    buttonR: {
        paddingVertical: 20,
        backgroundColor: 'orange',
        borderRadius: 50,
        width: '85%',
        marginVertical: 35
    },
    headingR: {
        fontSize: 30,
        fontWeight: '500',
        paddingVertical: 20
    },
    sublineR: {
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