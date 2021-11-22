import { Button, Icon, Text, TextInput } from '@/components'
import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import OnboardSvg from '@/assets/images/onboard.svg'
import { S_HEIGHT, S_WIDTH } from '@/constants/layout'
import LinearGradient from 'react-native-linear-gradient';
import { BASE_COLOR } from '@/constants/color'
import { useNavigation } from '@react-navigation/core'

const SignInScreen = () => {
    const navigation = useNavigation()
    const signUp = () => {
        navigation.navigate('sign-up' as never)
    }
    const forgotPassword = () => {
        navigation.navigate('reset-password' as never)
    }

    // const 
    return (
        <View style={styles.container}>
            <View style={styles.background}>
                <LinearGradient colors={['#FFF3E900', '#FFF3E9']} style={styles.linearGradient} />
                <View style={styles.yellow}></View>
                <OnboardSvg width={S_WIDTH} height={S_HEIGHT} style={styles.svgBg} />
            </View>
            <View style={styles.body}>
                <View style={styles.titleView}>
                    <Text style={styles.title}>Welcome </Text>
                    <Text style={styles.title}>to habits land</Text>
                </View>

                <Pressable style={styles.button}>
                    <View style={styles.icon}>
                        <Icon name="facebook" />
                    </View>
                    <Text>Countinue with facebook</Text>
                </Pressable>
                <Pressable style={styles.button}>
                    <View style={styles.icon}>
                        <Icon name="google" />
                    </View>
                    <Text>Countinue with google</Text>
                </Pressable>

                <View style={styles.modal}>
                    <Text style={styles.emailText}>Log in with email</Text>
                    <View style={styles.line} />
                    <TextInput icon='mail' placeholder='Email' />
                    <TextInput icon='lock' placeholder='Password' rightTxt='Show' /> 
                    <Button>Login</Button>
                    <Text style={{ ...styles.smlTxt, marginTop: 10, textDecorationLine: 'underline' }} onPress={forgotPassword}>Forgot Password ?</Text>

                    <View style={styles.signUpTxt}>
                        <Text style={styles.smlTxt}>Don't have an account? </Text>
                        <Text style={{ ...styles.smlTxt, fontWeight: '600' }} onPress={signUp}>Sign Up</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: S_HEIGHT
    },
    background: {
        position: 'absolute',
        zIndex: -1,
    },
    linearGradient: {
        position: 'absolute',
        width: S_WIDTH,
        height: 150,
        bottom: S_HEIGHT * 5 / 7,
        zIndex: 1
    },
    yellow: {
        position: 'absolute',
        width: S_WIDTH,
        height: S_HEIGHT * 5 / 7,
        backgroundColor: BASE_COLOR.blurYellow,
        bottom: 0,
        zIndex: 1
    },
    body: {
        marginTop: S_HEIGHT / 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleView: {
        marginBottom: 40
    },
    title: {
        fontSize: 30,
        width: S_WIDTH - 50,
        textAlign: 'center',
        fontWeight: '700',
        textTransform: 'uppercase'
    },
    button: {
        backgroundColor: BASE_COLOR.white,
        height: 60,
        width: S_WIDTH - 50,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    icon: {
        height: 40,
    },
    modal: {
        width: S_WIDTH,
        marginTop: 20,
        height: S_HEIGHT * 1 / 2,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: BASE_COLOR.white,
        alignItems: 'center'
    },
    emailText: {
        margin: 20,
        fontWeight: '400',
        fontSize: 16
    },
    line: {
        width: S_WIDTH,
        height: 1,
        backgroundColor: BASE_COLOR.blurYellow
    },
    input: {
        backgroundColor: BASE_COLOR.blurYellow,
        height: 60,
        width: S_WIDTH - 50,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    miniIcon: {
        marginLeft: 20,
        marginRight: 40
    },
    txtInput: {
        color: BASE_COLOR.brown,
        width: 200
    },
    showTxt: {
        fontSize: 13,
        textDecorationLine: 'underline',
        fontWeight: '400',
    },
    smlTxt: {
        marginBottom: 10,
        fontSize: 12,
        fontWeight: '400',

    },
    signUpTxt: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    svgBg: {

    }
})

export default SignInScreen