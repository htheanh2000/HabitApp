import { Icon, Text, Header, TextInput, Progress, Switch, Guide } from '@/components'
import { BASE_COLOR } from '@/constants/color'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { WEEK } from '@/helper'
const NewHabitScreen = () => {
    const [week, setWeek] = useState<any>([])
    useEffect(() => {
        const arr = WEEK.map((item, index) => {
            let type = 'full'
            switch (index) {
                case 5:
                    type = 'half'
                    break;
                case 6:
                    type = 'none'
                default:
                    break;
            }
            return {
                day: item,
                type
            }
        })
        console.log(arr.length);

        setWeek(arr)
    }, [])
    return (
        <View style={styles.container}>
            <Icon name='cloud' style={styles.cloud} />
            <Header leftIcon='back' title='New Habit' />
            <View style={styles.search}>
                <TextInput placeholder='Enter habit name' backgroundColor={BASE_COLOR.white} />
                <View style={styles.addBtn}>
                    <Icon name='reader' />
                    <Icon name='smlPlus' style={styles.smlPlus} />
                </View>
            </View>
            <View style={styles.card}>
                <View style={styles.headerCard}>
                    <Text style={styles.freTxt}>Habit frequency</Text>
                    <View style={styles.row}>
                        <Text style={styles.customTxt}>Custom </Text>
                        <Icon name='rightArrow' />
                    </View>
                </View>
                <View style={styles.row}>
                    {week.map((item: any, index: number) =>
                        <View key={item.day} style={styles.dayBl}>
                            <Text style={styles.dayTxt}>{item.day}</Text>
                            <Progress status={item.type} />
                        </View>
                    )}
                </View>
            </View>

            <View style={[styles.card]}>
                <View style={styles.headerCard}>
                    <Text style={styles.freTxt}>Reminder</Text>
                    <View style={styles.row}>
                        <Text style={styles.customTxt}>10:00AM </Text>
                        <Icon name='rightArrow' />
                    </View>
                </View>
            </View>

            <View style={[styles.card]}>
                <View style={styles.headerCard}>
                    <Text style={styles.freTxt}>Notification</Text>
                    <Switch />
                </View>
            </View>
            <Guide style={styles.guide}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BASE_COLOR.background,
        paddingHorizontal: 20
    },
    row: {
        flexDirection: 'row'
    },
    cloud: {
        position: 'absolute',
        bottom: 0
    },
    search: {
        marginTop: 20,
        flexDirection: 'row'
    },
    addBtn: {
        width: 60,
        height: 60,
        marginLeft: 10,
        borderRadius: 12,
        backgroundColor: BASE_COLOR.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    smlPlus: {
        position: 'absolute',
        top: 0,
        right: 0
    },
    card: {
        backgroundColor: BASE_COLOR.white,
        borderRadius: 12,
        marginTop: 10
    },
    freTxt: {
        fontSize: 18,
        fontWeight: '400',
    },
    customTxt: {
        fontSize: 18,
        fontWeight: '700',
        color: BASE_COLOR.boldYellow
    },
    headerCard: {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    dayBl: {
        flex: 1 / 7,
        height: 80,
        borderWidth: .5,
        borderColor: BASE_COLOR.blurYellow,
        alignItems: 'center',
        borderTopWidth: 1,
        paddingTop: 10
    },
    dayTxt: {
        fontWeight: '400',
        textTransform: 'uppercase',
        marginBottom: 3
    },
    guide: {
        position: 'absolute',
        left: 14,
        bottom: 40
    }
})
export default NewHabitScreen