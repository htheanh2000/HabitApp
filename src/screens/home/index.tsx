import { Header, Icon, Progress, Screen, Text } from '@/components'
import React, { useEffect, useState } from 'react'
import { FlatList, Pressable, StyleSheet, View } from 'react-native'
import { getWeekList } from '@/helper'
import { BASE_COLOR } from '@/constants/color'
import auth from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/database';
import { useNavigation } from '@react-navigation/core'
const database = firebase
    .app()
    .database('https://habitapp-31c85-default-rtdb.asia-southeast1.firebasedatabase.app/')
const COLORS = [
    BASE_COLOR.yellow,
    BASE_COLOR.red,
    BASE_COLOR.blue,
    BASE_COLOR.violet
]

const HomeScreen = () => {
    const [weeks, setWeek] = useState<any[]>()
    const [habits, setHabits] = useState<any>([])
    const navigation = useNavigation()
    useEffect(() => {
        setWeek(getWeekList())
        if (auth().currentUser) {
            const userId = auth().currentUser?.uid
            if (userId) {
                const onValueChange = database
                    .ref('users/' + userId + '/habits')
                    .on('value', (snapshot) => {
                        const data = snapshot.val()
                        setHabits(Object.keys(data).map(key => {
                            return data[key]
                        }))
                    })
                return () => database.ref('users/' + userId + '/habits').off('value', onValueChange);
            }
        }
    }, [])

    const renderItem = (item: any) => {
        const { date, day, today } = item
        return (
            <View style={styles.dateBlock}>
                {today && <View style={styles.today} />}
                <Text style={styles.dateTxt}>{day}</Text>
                <Text>{date}</Text>
            </View>
        )
    }

    const onPress = () => {
        navigation.navigate('analyst' as never)
    }
    return (
        <Screen>
            <Header leftIcon='menu' rightIcon='avatar' title='Homepage' />
            <View style={styles.card}>
                <Text style={styles.title}>We first make out habits, and then our habits make us.</Text>
                <Text style={styles.author}>- ANONYMOUS</Text>
                <Icon name='homepage' style={styles.cardImg} />
            </View>
            <View style={styles.habitsHeader}>
                <Text style={styles.habitsTxt}>HABITS</Text>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={weeks}
                    renderItem={({ item }) => renderItem(item)}
                    keyExtractor={item => item.day}
                />
            </View>
            <View >
                {
                    habits.map((habit: any, id: number) => {
                        const { name, frequency } = habit
                        return (
                            <Pressable key={name} style={[styles.habitRow]} onPress={onPress}>
                                <Text style={styles.habitsTxt}>{name}</Text>
                                <FlatList
                                    showsHorizontalScrollIndicator={false}
                                    horizontal
                                    data={frequency}
                                    keyExtractor={item => item.id + item.name}
                                    renderItem={({ item }) => <Progress mainStyle={[styles.progress]} backgroundColor={COLORS[id % COLORS.length]} key={item.name + item.id} status={item.type} />}
                                />
                            </Pressable>
                        )
                    })
                }
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    cloud: {
        position: 'absolute',
        bottom: 0,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 12,
        overflow: 'hidden',
        height: 146,
        marginTop: 30,
        padding: 20
    },
    cardImg: {
        position: 'absolute',
        right: 0,
        zIndex: -1
    },
    title: {
        width: 200,
        fontWeight: '700',
        textTransform: 'uppercase',
        lineHeight: 25
    },
    author: {
        fontWeight: '400',
        fontSize: 14,
        marginTop: 10
    },
    habitsHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    habitRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: BASE_COLOR.white,
        borderRadius: 12,
        paddingVertical: 10
    },
    habitsTxt: {
        fontWeight: '700',
        fontSize: 16,
        margin: 10,
        paddingLeft: 10,
        width: 100,
    },
    dateBlock: {
        width: 50,
        height: 50,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: BASE_COLOR.white,
        marginRight: 5
    },
    dateTxt: {
        fontSize: 14,
        fontWeight: '300',
    },
    today: {
        width: 15,
        height: 2,
        backgroundColor: BASE_COLOR.brown,
        position: 'absolute',
        top: 2
    },
    line: {
        width: 1,
        height: 35,
        marginRight: 10,
        borderWidth: 1,
        borderColor: BASE_COLOR.yellow
    },
    progress: {
        width: 50,
        height: 50,
        marginRight: 5
    }
})

export default HomeScreen


