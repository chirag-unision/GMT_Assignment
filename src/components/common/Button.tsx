import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'

export default function Button(props: any) {
  return (
    <Pressable style={styles.button} onPress={props.handlePress}>
        <Text style={{textAlign: 'center', fontWeight: '500'}}>{props.title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 20,
        backgroundColor: '#FE8C00',
        borderRadius: 50
    }
})