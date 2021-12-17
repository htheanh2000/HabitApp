import { Button, Icon, Text, TextInput } from '@/components'
import { BASE_COLOR } from '@/constants/color'
import { S_WIDTH } from '@/constants/layout'
import { resetPassword } from '@/firebase'
import { useNavigation } from '@react-navigation/native'
import React, { createRef } from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'

const ResetScreen = () => {
    const navigation = useNavigation()
    const goBack = () => {
        navigation.goBack()
    }
    const signIn = () => {
        navigation.navigate('sign-in' as never)
    }

    const onResetPwd =()=> {
        const email = emailRef.current?.getValue() || ''
        resetPassword(email)
    }
    interface IRef {
        getValue: () => string 
    }

    const emailRef = createRef<IRef>()
    return(
        <SafeAreaView style={styles.container}>
            <Icon name='back' blurBackground style={styles.backIcon} onPress={goBack}/>
            <Text style={styles.title}>Forgot Your Password ?</Text>
            <Icon name='resetPassword' />
            <View style={styles.modal}>
                    <Text type='small' style={styles.content}>Enter your registered email below to receive password reset instruction</Text>
                    <TextInput ref={emailRef} style={{width: '100%'}} backgroundColor={BASE_COLOR.blurYellow} placeholder='Email'/>
                    <Button style={{width: '100%'}} onPress={onResetPwd}>Send reset link</Button>
            </View>

            <View style={styles.rememberTxt}>
                <Text type='small'>Already have an account?</Text>
                <Text type='small' style={{fontWeight:'700'}} onPress={signIn}> Sign In</Text>
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
    backIcon: {
        position: 'absolute',
        top: 50,
        left: 30
    },
    title: {
        textTransform: 'uppercase',
        marginTop: 70,
        marginBottom: 20,
        fontWeight: '700',
        fontSize: 20
    },
    modal: {
        width: S_WIDTH-30,
        padding: 10,
        backgroundColor: BASE_COLOR.white,
        borderRadius: 12,
        alignItems: 'center'
    },
    content: {
        marginTop: 10,
        marginBottom: 20,
        width: 300
    },
    rememberTxt: {
        position:'absolute',
        bottom: 30,
        flexDirection: 'row',
        alignItems: 'center',
    },
})

export default ResetScreen