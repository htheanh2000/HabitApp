import { Dropdown, Header, Icon, Screen, Text } from '@/components'
import { BASE_COLOR, BLUR_COLOR } from '@/constants/color'
import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { FlatList, Pressable, StyleSheet, View } from 'react-native'
import ProgressCircle from 'react-native-progress-circle'

const data = [{
    number: 7,
    date: '06/14',
    total: 14,
},
{
    number: 0,
    date: '06/15',
    total: 14,
},
{
    number: 6,
    date: '06/17',
    total: 14,
},
{
    number: 5,
    date: '06/18',
    total: 14,
},
{
    number: 4,
    date: '06/19',
    total: 14,
},
{
    number: 9,
    date: '06/20',
    total: 14,
},
{
    number: 10,
    date: 'Today',
    total: 14,
}

]
const ProfileScreen = () => {
    const navigation = useNavigation()
    const onPressBill = () => {
        navigation.navigate('subscription' as never)
    }

    const renderItem = (item: any, index: number) => {
        const { number, total, date } = item
        const percent = Math.round(number / total * 100)
        const getColor = () => {
            if (!percent) {
                return {
                    color: BASE_COLOR.red,
                    shadowColor: BLUR_COLOR.blurRed
                }
            }
            else if (date === 'today') {
                return {
                    color: BASE_COLOR.violet,
                    shadowColor: BLUR_COLOR.blurViolet
                }
            }
            else return {
                color: BASE_COLOR.yellow,
                shadowColor: BLUR_COLOR.blurYellow
            }
        }

        const { color, shadowColor } = getColor()
        return (
            <View style={{ margin: 3, justifyContent: 'center', alignItems: 'center' }}>
                <ProgressCircle
                    percent={percent | 3}
                    radius={23}
                    borderWidth={5}
                    color={color}
                    shadowColor={shadowColor}
                    bgColor="#fff"
                >
                    <Text style={{ fontSize: 12 }}>{number}</Text>
                </ProgressCircle>
                <Text style={styles.date}>{index % 2 === 0 ? date : ''}</Text>
            </View>
        )
    }

    return (
        <Screen>
            <Header leftIcon='back' title='Profile' rightIcon='pen' />
            <View style={[styles.card]}>
                <View style={[styles.row, { justifyContent: 'space-between', padding: 10 }]}>
                    <View style={[styles.row]}>
                        <Icon size={60} name='mentor' />
                        <View style={styles.nameView}>
                            <Text style={styles.nameTit}>Name</Text>
                            <Text style={styles.nameTxt}>Zero Boy</Text>
                        </View>
                    </View>
                    <Dropdown title='This week' style={styles.dropdown} />
                </View>

                <View style={styles.row}>
                    <View style={[styles.splitCard, { borderRightWidth: 0.5 }]}>
                        <View>
                            <Text style={styles.splitTit}>Total Working Hours</Text>
                            <Text style={styles.splitNum}>18</Text>
                        </View>
                        <Icon name='clock' />
                    </View>

                    <View style={styles.splitCard}>
                        <View>
                            <Text style={styles.splitTit}>Task Completed</Text>
                            <Text style={styles.splitNum}>12</Text>
                        </View>
                        <Icon name='flag' />
                    </View>
                </View>
                <FlatList
                    style={{ marginVertical: 10 }}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={data}
                    keyExtractor={item => item.date}
                    renderItem={(data) => renderItem(data.item, data.index)}
                />
            </View>
            <Pressable style={styles.smlCard} onPress={onPressBill}>
                <View style={styles.row}>
                    <Icon name='billingMethod' />
                    <Text style={styles.smlCardTxt}>Billing Methods</Text>
                </View>
                <Icon name='viRiArrow' />
            </Pressable>
            <View style={styles.smlCard}>
                <View style={styles.row}>
                    <Icon name='longStreak' />
                    <Text style={styles.smlCardTxt}>Long Streaks</Text>
                </View>
                <View style={styles.row}>
                    <Text>20 Days </Text>
                    <Icon name='viRiArrow' />
                </View>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: BASE_COLOR.white,
        borderRadius: 12,
        marginTop: 20
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    smlCard: {
        backgroundColor: BASE_COLOR.white,
        borderRadius: 12,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },
    nameView: {
        marginLeft: 20
    },
    nameTit: {
        fontWeight: '300'
    },
    nameTxt: {
        marginTop: 5
    },
    dropdown: {
        borderColor: BASE_COLOR.violet,
        borderWidth: .5
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
    date: {
        fontSize: 12,
        fontWeight: '400',
        marginTop: 10
    },
    smlCardTxt: {
        marginLeft: 10,
        fontWeight: '500'
    }
})
export default ProfileScreen