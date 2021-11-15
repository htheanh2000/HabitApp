import { Button, CheckBox, Icon, Text, TextInput } from '@/components'
import { BASE_COLOR } from '@/constants/color'
import { signUp } from '@/firebase'
import { useNavigation } from '@react-navigation/native'
import React, { useRef } from 'react'
import {  SafeAreaView, StyleSheet, View } from 'react-native'

interface InputRef {
    getValue: () => string
}

const SignUpScreen = () => {
    const navigation = useNavigation()

    const usernameRef  = useRef<InputRef>(null)
    const emailRef  = useRef<InputRef>(null)
    const passwordRef  = useRef<InputRef>(null)

    const signIn = () => {
        navigation.navigate('sign-in' as never)
    }

    const regis = async () => {
        const username = usernameRef.current?.getValue() || 'Zero'
        const email = emailRef.current?.getValue() || 'htheanh2000@gmail.com'
        const password = passwordRef.current?.getValue() || 'Theanh123!' 
        const response = await signUp(email,password,username)
        if(response.success) {
            navigation.navigate('homepage' as never)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Icon name='signup' style={styles.img} />
            <Text style={styles.title}>Create your account</Text>
            <TextInput icon='user' ref={usernameRef} placeholder='Username' backgroundColor={BASE_COLOR.white} showLine={true} />
            <TextInput icon='mail' ref={emailRef} placeholder='Email' backgroundColor={BASE_COLOR.white} showLine={true} />
            <TextInput icon='lock' ref={passwordRef} placeholder='Password' backgroundColor={BASE_COLOR.white} rightTxt='Show' showLine={true} />
            <View style={styles.checkView}>
                <CheckBox text='Keep me sign in' isFocus />
                <CheckBox text='Email me about special pricing and more' isFocus />
            </View>
            <Button onPress={regis}>Create Account</Button>
            <View style={styles.otherOpt}>
                <View style={styles.hline} />
                <Text style={styles.otherTxt}> Or sign in with </Text>
                <View style={styles.hline} />
            </View>
            <View style={[styles.rowCenter]}>
                <View style={[styles.rowCenter, styles.button]}>
                    <View style={{ height: 40 }}>
                        <Icon name='facebook' />
                    </View>
                    <Text>Facebook</Text>
                </View>
                <View style={[styles.rowCenter, styles.button]}>
                    <View style={{ height: 40 }}>
                        <Icon name='google' />
                    </View>
                    <Text>Google</Text>
                </View>
            </View>
            <View style={styles.rowCenter}>
                <Text style={styles.signIn}>Already have an account?</Text>
                <Text style={{ ...styles.signIn, fontWeight: '700' }} onPress={signIn}> Sign In</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BASE_COLOR.blurYellow,
        alignItems: 'center'
    },
    img: {
        marginTop: 10
    },
    title: {
        fontWeight: '700',
        fontSize: 18,
        marginTop: 10,
        textTransform: 'uppercase',
        marginBottom: 20
    },
    checkView: {
        marginTop: 10,
        marginBottom: 10
    },
    otherOpt: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    hline: {
        width: 100,
        height: .5,
        backgroundColor: BASE_COLOR.brown
    },
    otherTxt: {
        fontWeight: '300',
        fontSize: 13
    },
    rowCenter: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        backgroundColor: BASE_COLOR.white,
        borderRadius: 8,
        width: 170,
        height: 50,
        justifyContent: 'center',
        marginHorizontal: 5,
        marginTop: 20
    },
    signIn: {
        fontSize: 13,
        marginTop: 20,
        fontWeight: '300'
    }
})

export default SignUpScreen