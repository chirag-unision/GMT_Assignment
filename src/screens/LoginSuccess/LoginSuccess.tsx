import { StyleSheet, Text, View, ScrollView, Image, Button } from 'react-native'
import React, { useRef } from 'react'
import RBSheet from 'react-native-raw-bottom-sheet';

export default function LoginSuccess() {
    const refScrollable = useRef();
    return (
        <View>
            <Image style={{position: 'absolute'}} source={require('../../assets/bg1.png')} />
            <Button
                title="OPEN BOTTOM SHEET"
                onPress={() => refScrollable.current.open()}
            />
      <RBSheet
        ref={refScrollable}
        draggable
        customModalProps={{
          animationType: 'slide',
          statusBarTranslucent: true,
        }}
        customStyles={{
            wrapper: {
                
            },
          container: {
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          },
          draggableIcon: {
            width: 80,
          },
        }}>
        <ScrollView>
            <Button title='Hey there' />
        </ScrollView>
      </RBSheet>
        </View>
    )
}

const styles = StyleSheet.create({})