import { Icon, Text, Header, TextInput, Progress, Switch, Guide, Button } from '@/components'
import { BASE_COLOR, BLUR_COLOR } from '@/constants/color'
import React, { useEffect, useState } from 'react'
import { FlatList, Pressable, SafeAreaView, StyleSheet, View } from 'react-native'
import { WEEK } from '@/helper'
import Modal from "react-native-modal";
import { S_HEIGHT, S_WIDTH } from '@/constants/layout'
import DatePicker from 'react-native-date-picker'
import moment from 'moment'


const NewHabitScreen = () => {
    const [week, setWeek] = useState<any>([])
    const [notiList, setNoti] = useState<any>([])
    const [isModalVisible, setModalVisible] = useState(false);
    const [notificationOn, setNotification] = useState(false);
    const [pickTimeVisible, setPickTimeVisible] = useState(false);
    const [date, setDate] = useState(new Date())
    const DELAY = 500

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
                id: item + '-' + type,
                day: item,
                type
            }
        })
        setWeek(arr)
    }, [])

    const toggleModal = () => {
        setModalVisible(false);
        setTimeout(() => {
            setPickTimeVisible(false);
        }, DELAY)
    }

    const toggleTimeModal = () => {
        setPickTimeVisible(false)
        setTimeout(() => {
            setModalVisible(true);
        }, DELAY)
    }

    const addReminderModal = () => {
        setModalVisible(false);
        setTimeout(() => {
            setPickTimeVisible(true);
        }, DELAY)
    }

    const onPressSwitch = (time: string) => {
        const newNoti = notiList.map((item: any) => {
            return {
                id: item.id.slice(0, -1) + (item.status ? '0' : '1'),
                time: item.time,
                status: item.time === time ? !item.status : item.status
            }
        })
        setNoti(newNoti)
    }

    const addReminder = () => {
        setNoti([...notiList, {
            id: moment(date).format('LT') + '-' + Math.round(Math.random() * 10000) + '-1',
            time: moment(date).format('LT'),
            status: true
        }])
        setPickTimeVisible(false)
        setTimeout(() => {
            setModalVisible(true);
        }, DELAY)
    }

    const onChangeFrequency = (item: any) => {
        let nextType = ''
        switch (item.type) {
            case 'full':
                nextType = 'none'
                break;
            case 'half':
                nextType = 'full'
                break;
            case 'none':
                nextType = 'half'
                break;
            default:
                nextType = 'none'
                break;
        }
        const newWeek = week.map((ele: any) => {
            return {
                id: ele.day + '-' + (ele.day === item.day ? nextType : ele.type),
                day: ele.day,
                type: ele.day === item.day ? nextType : ele.type
            }
        })
        setWeek(newWeek)
    }

    const renderReminderTxt = () => {
        let text = ''
        switch (notiList.length) {
            case 0:
                text = 'Add one'
                break;
            case 1:
                text = notiList[0].time
                break;
            default:
                text = 'See more...'
                break;
        }
        return text
    }

    const renderItem = ({ item, index }: { item: any, index: any }) => {
        return (
            <View style={[styles.notiBl, { backgroundColor: item.status ? BLUR_COLOR.yellowSwitch20 : BLUR_COLOR.blurViolet }]}>
                <Text style={styles.textNotiBl}>{item.time}</Text>
                <Switch status={item.status} onPress={() => onPressSwitch(item.time)} />
            </View>
        )
    }
    const renderDay = ({ item, index }: { item: any, index: any }) => {
        return (
            <Pressable key={item.day} style={styles.dayBl} onPress={() => onChangeFrequency(item)}>
                <Text style={styles.dayTxt}>{item.day}</Text>
                <Progress status={item.type} />
            </Pressable>
        )
    }
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
                <FlatList
                    horizontal
                    data={week}
                    renderItem={renderDay}
                    keyExtractor={(item: any) => item.id}
                />
            </View>

            <View style={[styles.card]}>
                <View style={styles.headerCard}>
                    <Text style={styles.freTxt}>Reminder</Text>
                    <View style={styles.row}>
                        <Text style={styles.customTxt} onPress={() => setModalVisible(true)}>{renderReminderTxt()} </Text>
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
            <Guide style={styles.guide} />
            <Modal isVisible={isModalVisible} coverScreen={true} style={styles.modalContainer} onBackdropPress={toggleModal}>
                <View style={styles.modal}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={notiList}
                        extraData={(item: any) => item.id}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        numColumns={3}
                    />
                    <SafeAreaView style={styles.addReminder}>
                        <Button onPress={addReminderModal}> Add reminder </Button>
                        <View style={styles.addBtn}>
                            <Icon name={notificationOn ? 'notiOn' : 'notiOff'} onPress={() => setNotification(!notificationOn)} />
                        </View>
                    </SafeAreaView>
                </View>
            </Modal>
            <Modal isVisible={pickTimeVisible} coverScreen={true} style={styles.modalContainer} onBackdropPress={toggleTimeModal}>
                <SafeAreaView style={styles.timeModal}>
                    <DatePicker
                        mode="time"
                        open={pickTimeVisible}
                        date={date}
                        onDateChange={setDate}
                    />
                    <Button onPress={addReminder}>Add</Button>
                </SafeAreaView>
            </Modal>
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
        width: S_WIDTH / 7 - 6,
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
    },
    modalContainer: {
        margin: 0,
        overflow: 'hidden'
    },
    modal: {
        maxHeight: S_HEIGHT * 2 / 3,
        backgroundColor: BASE_COLOR.white,
        position: 'absolute',
        width: S_WIDTH,
        bottom: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderRadius: 12,
        paddingHorizontal: 10,
        paddingTop: 20
    },
    timeModal: {
        backgroundColor: BASE_COLOR.white,
        position: 'absolute',
        width: S_WIDTH,
        bottom: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        paddingHorizontal: 10,
        paddingTop: 20
    },
    notiBl: {
        width: S_WIDTH / 3 - 20,
        height: S_WIDTH / 3 - 20,
        borderRadius: 12,
        backgroundColor: BLUR_COLOR.yellowSwitch20,
        margin: 5,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textNotiBl: {
        fontSize: 20,
        marginBottom: 20
    },
    addReminder: {
        flexDirection: 'row',
        marginTop: 10,
    }
})
export default NewHabitScreen