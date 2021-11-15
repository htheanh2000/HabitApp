import { Button, CheckBox, Icon, Text, TextInput } from '@/components'
import { BASE_COLOR } from '@/constants/color'
import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'

const SignUpScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Icon name='signup' style={styles.img} />
            <Text style={styles.title}>Create your account</Text>
            <TextInput icon='user' placeholder='Username' backgroundColor={BASE_COLOR.white} showLine={true} />
            <TextInput icon='mail' placeholder='Email' backgroundColor={BASE_COLOR.white} showLine={true} />
            <TextInput icon='lock' placeholder='Password' backgroundColor={BASE_COLOR.white} rightTxt='Show' showLine={true} />
            <View style={styles.checkView}>
                <CheckBox text='Keep me sign in' isFocus />
                <CheckBox text='Email me about special pricing and more' isFocus />
            </View>
            <Button>Create Account</Button>
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
                <Text style={{...styles.signIn, fontWeight:'700'}}> Sign In</Text>
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
        justifyContent:'center',
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