import { Header, Icon, Screen, Image, Text, Progress } from '@/components'
import { BASE_COLOR } from '@/constants/color'
import { useNavigation } from '@react-navigation/core'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { FlatList, Pressable, ScrollView, StyleSheet, View } from 'react-native'

const Days = ['SUN', 'MON', 'TUE', 'WED', 'THUS', 'FRI', 'SAT']

const AnalystScreen = () => {
    const [dates, setDate] = useState<any[]>([])
    const navigation = useNavigation()
    useEffect(() => {
        const firstDate = moment(moment().startOf('months')).startOf('weeks')// first day of calendar
        firstDate.subtract(1, 'day')
        const arr = []
        for (let index = 0; index < 35; index++) {
            const element = {
                id: index,
                date: firstDate.add(1, 'day').format('DD-MM'),
                status: 'half'
            }
            arr.push(element)
        }
        setDate(arr)
    }, [])

    const renderItem = (item: any) => {
        const date = item.date.split('-')
        const montth = moment().format('MM')
        return (
            <View style={[styles.date, date[1] === montth && { backgroundColor: '#fff9f4' }]}>
                <Text mtop={3} weight={4} size={12}>{date[0]}</Text>
                <Progress status={item.status} layoutColor={date[1] === montth ? '#feebda' : '#fed8b5'} />
            </View>
        )
    }

    const onPressCard =() => {
        navigation.navigate('dashboard' as never)
    }
    return (
        <Screen>
            <Header leftIcon='back' title='Read A Book' rightIcon='pen' />
            <Pressable style={styles.card} onPress={onPressCard}>
                <Image name='camp' style={{ width: 75, height: 75 }} />
                <View style={{ marginLeft: 10 }}>
                    <Text size={18}>Read a Book</Text>
                    <View style={styles.content}>
                        <Icon name='belt' />
                        <Text size={14} weight={3} mleft={5}>Repeat Everyday</Text>
                    </View>
                    <View style={styles.content}>
                        <Icon name='belt' />
                        <Text size={14} weight={3} mleft={5}>Reminder 5:00 am</Text>
                    </View>
                </View>
            </Pressable>

                <View style={styles.calendar}>
                    <View style={styles.calHeader}>
                        <Icon name='viRiArrow' style={styles.revert} />
                        <Text size={18}>{moment().format('MMMM')}</Text>
                        <Icon name='viRiArrow' />
                    </View>
                    <View style={styles.row}>
                        {
                            Days.map(day => <Text key={day} style={styles.day} weight={3}>{day}</Text>)
                        }
                    </View>
                    <FlatList
                        data={dates}
                        numColumns={7}
                        keyExtractor={dates => dates.id}
                        renderItem={({ item }) => renderItem(item)}
                    />

                </View>
        </Screen>


    )
}

const styles = StyleSheet.create({
    card: {
        padding: 10,
        backgroundColor: BASE_COLOR.white,
        borderRadius: 12,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    calHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    revert: {
        transform: [{ rotate: '180deg' }]
    },
    calendar: {
        padding: 10,
        backgroundColor: BASE_COLOR.white,
        borderRadius: 12,
        marginTop: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    day: {
        flex: 1 / 7,
        marginTop: 20,
        textAlign: 'center'
    },
    date: {
        borderRadius: 12,
        backgroundColor: '#FFF3E9',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 3,
        padding: 2,
        marginVertical: 5
    },
    splitCard: {
        flex: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        padding: 10,
        paddingRight: 15,
        borderColor: BASE_COLOR.blurYellow,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    splitTit: {
        fontSize: 12,
        fontWeight: '300'
    },
    splitNum: {
        fontSize: 22,
        fontWeight: '800',
        marginTop: 5
    },
})

export default AnalystScreen