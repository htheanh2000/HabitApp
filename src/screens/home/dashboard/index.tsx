import { Button, Header, Icon, Screen, Text } from '@/components'
import { BASE_COLOR } from '@/constants/color'
import { S_WIDTH } from '@/constants/layout'
import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import Modal from "react-native-modal";
const DashboardScreen = () => {
    const navigation = useNavigation()
    const [visible, setVisible] = useState(false)

    const createNewHabit = () => {
        setVisible(false)

        setTimeout(() => {
            navigation.navigate('new-habit' as never)
        }, 300)
    }

    return (
        <Screen>
            <Header leftIcon='back' title='Analyst' rightIcon='pen' />
            <View style={styles.card}>
                <View>
                    <View style={[styles.item, { borderRightWidth: .25, borderBottomWidth: .25 }]} >
                        <View style={[styles.content]}>
                            <Text size={26} >20 Days</Text>
                            <Text weight={3}>Longest Streak</Text>
                        </View>
                        <Icon name='streak' />
                    </View>
                    <View style={[styles.item, { borderRightWidth: .25, borderTopWidth: .25 }]} >
                        <View style={styles.content}>
                            <Text size={26} >98 %</Text>
                            <Text weight={3}>Completion Rate</Text>
                        </View>
                        <Icon name='completion' />
                    </View>
                </View>
                <View>
                    <View style={[styles.item, { borderLeftWidth: .25, borderBottomWidth: .25 }]} >
                        <View style={styles.content}>
                            <Text size={26} >0 Days</Text>
                            <Text weight={3}>Current Streak</Text>
                        </View>
                        <Icon name='light' />
                    </View>
                    <View style={[styles.item, { borderRightWidth: .25, borderTopWidth: .25 }]} >
                        <View style={styles.content}>
                            <Text size={26} >7</Text>
                            <Text weight={3}>Average Easiness Score</Text>
                        </View>
                        <Icon name='average' />
                    </View>
                </View>
            </View>
            <Button style={{ marginTop: 30 }} onPress={() => setVisible(true)}>Mark Habit as Complete</Button>
            <Button style={{ marginTop: 10, backgroundColor: BASE_COLOR.white }}>Mark Habit as Missed</Button>
            <Modal isVisible={visible} coverScreen={true}>
                <SafeAreaView style={styles.modal} >
                    <Icon name='close' style={styles.close} onPress={() => setVisible(false)} />
                    <Icon name='camp' />
                    <Text size={22}>Congratulations!</Text>
                    <Text align='center' weight={3} style={{ width: '80%', marginTop: 10 }}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</Text>
                    <Button style={{ width: '90%', marginTop: 30 }} onPress={createNewHabit}>Create new habit</Button>
                    <Button style={{ width: '90%', marginTop: 10, backgroundColor: BASE_COLOR.blurYellow }} onPress={() => setVisible(false)}>Continue</Button>
                </SafeAreaView>
            </Modal>
        </Screen>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: BASE_COLOR.white,
        borderRadius: 12,
        flexDirection: 'row',
        marginTop: 30
    },
    item: {
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        borderColor: BASE_COLOR.yellow,
        width: (S_WIDTH - 20) / 2
    },
    content: {
        marginRight: 10,
        width: 100,
        height: 60
    },
    modal: {
        height: 600,
        backgroundColor: BASE_COLOR.white,
        borderRadius: 20,
        alignItems: 'center'
    },
    close: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1
    }
})
export default DashboardScreen