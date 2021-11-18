import { Header, Icon, Screen, Text } from '@/components'
import { BASE_COLOR } from '@/constants/color'
import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'

const SubscriptionScreen = () => {
    return(
        <Screen>
            <Header leftIcon='back' title='Premium'/>
            <View style={[styles.card]}>
                <Text style={styles.title}>60% of your upgrade</Text>
                <Text style={styles.content}>Expire in</Text>
                
                <Icon name='homepage' style={styles.cardImg} />
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 12,
        overflow: 'hidden',
        marginTop: 30,
        padding: 20,
        marginBottom: 10
    },
    title: {
        fontSize: 22,
        color: BASE_COLOR.yellow
    },
    content: {
        marginTop: 5,
        fontSize: 12,
        fontWeight: '300'
    },
    cardImg: {
        position: 'absolute',
        right: 0,
        zIndex: -1
    },
})
export default SubscriptionScreen