import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import OnboardSvg from '@/assets/images/onboard.svg'
import {S_WIDTH, S_HEIGHT} from '@/constants/layout'
import { Text } from '@/components'
import { useNavigation } from '@react-navigation/core'
import { getUser } from '@/firebase'
const SplashScreen = () => {
    const navigation = useNavigation()
    useEffect(() => {
        checkUser()
    }, [])

    const checkUser = async () => {
        const user = await getUser()
        if(!user) {
            navigation.navigate('intro' as never)
        }
        else {
            navigation.navigate('home-tab' as never)
        }
        
    }
    
    return (
        <View style={styles.container}>
            <OnboardSvg width={S_WIDTH} height={S_HEIGHT}/>
            <View style={styles.header}>
                <Text style={styles.textHeader}>Welcome to habit lands </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        position:'absolute',
        top: 100,
        left: S_WIDTH/2,
        width: S_WIDTH * 2/3,
        transform: [{ translateX: -S_WIDTH/3 }]
    },
    textHeader: {
        textAlign:'center',
        fontSize: 40,
        fontWeight: 'bold'
    }
})

export default SplashScreen