import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useRef } from 'react'
import RBSheet from 'react-native-raw-bottom-sheet'
import Success from '../../assets/success';
import { useNavigation } from '@react-navigation/native';
import routes from '../../constants/routes';
import Button from '../../components/common/Button';
import TextField from '../../components/common/TextField';

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
            <View style={{flex: 1}}>
                <View>
                    <TextField title={'New Password'} placeholder={'Enter Password'} />
                    <Text style={[styles.subline]}>Must be at least 8 character</Text>
                </View>
                {/* // */}
                <View>
                    <TextField title={'Confirm Password'} placeholder={'Enter Password'} />
                    <Text style={[styles.subline]}>Both password must match</Text>
                </View>
                <View style={styles.buttonBox}>
                    <Button title={'Continue'} handlePress={() => refScrollable.current.open()} />
                </View>
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
                        <Text style={[styles.text, styles.headingR]}>Password Changed</Text>
                        <Text style={[styles.text, styles.sublineR]}>Password changed successfully, you can login again with a new password</Text>
                    </View>
                    <View style={styles.buttonR}>
                        <Button title={'Go To Login'} handlePress={onPressHandlerReset} />
                    </View>
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
    container: {
        backgroundColor: 'white',
        height: Dimensions.get('screen').height,
        padding: 20
    },
    buttonBox: {
        position: 'absolute',
        bottom: 10,
        width: '100%',
    },
    buttonR: {
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