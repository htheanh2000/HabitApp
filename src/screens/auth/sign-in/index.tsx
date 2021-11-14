import { Icon, Text } from '@/components'
import React from 'react'
import { Pressable, StyleSheet, TextInput, View } from 'react-native'
import OnboardSvg from '@/assets/images/onboard.svg'
import { S_HEIGHT, S_WIDTH } from '@/constants/layout'
import LinearGradient from 'react-native-linear-gradient';
import { BASE_COLOR } from '@/constants/color'

const SignInScreen = () => {
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
                    <View style={styles.line}/>
                    <View style={styles.input}>
                        <Icon name="mail"/>
                        <TextInput style={{}} placeholder='htheanh2000@gmail.com'/>
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
        bottom: S_HEIGHT * 3 / 5,
        zIndex: 1
    },
    yellow: {
        position: 'absolute',
        width: S_WIDTH,
        height: S_HEIGHT * 3 / 5,
        backgroundColor: BASE_COLOR.blurYellow,
        bottom: 0,
        zIndex: 1
    },
    body: {
        marginTop: S_HEIGHT / 3,
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
        height: 300,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: BASE_COLOR.white,
        alignItems:'center'
    },
    emailText: {
        margin: 20,
        fontWeight: '400'
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
        justifyContent: 'center',
    },
    svgBg: {

    }
})

export default SignInScreen