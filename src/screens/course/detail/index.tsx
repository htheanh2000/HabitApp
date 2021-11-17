import { Header, Icon, Image, Screen, Text } from '@/components'
import { BASE_COLOR } from '@/constants/color'
import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

const timeline = [
    {
        id: 1,
        chap: 'Introduction',
        time: '2:16',
        locked: false
    },
    {
        id: 2,
        chap: 'Adopting Prompts to Covid-19...',
        time: '3:08',
        locked: true
    },
    {
        id: 3,
        chap: 'Choosing a Notebook',
        time: '6:06',
        locked: true
    },
    {
        id: 4,
        chap: 'Optional Supplies',
        time: '12:43',
        locked: true
    },
    {
        id: 5,
        chap: 'Day 1',
        time: '22:02',
        locked: true
    },
    {
        id: 6,
        chap: 'Final',
        time: '28:43',
        locked: true
    }
]

const CourseDetailScreen = (props: any) => {
    const data = props.route.params

    const renderItem = (item: any) => {
        return (
            <>
                <View style={styles.timeline}>
                    <View style={styles.row}>
                        <Icon name={item.locked ? 'locked' : 'play'} />
                        <View style={[styles.row, { justifyContent: 'space-between' }]}>
                            <Text style={styles.txtTimeline}>{item.id}. {item.chap}</Text>
                            <Text style={styles.txtTime}>{item.time}</Text>
                        </View>
                    </View>

                </View>
                <View style={styles.line} />
            </>
        )
    }

    return (
        <Screen>
            <Header leftIcon='back' title={data.title} />
            <Image name='video' style={{ marginTop: 20 }} />
            <View style={styles.card}>
                <Text style={styles.title}>{data.title}</Text>
                <View style={styles.line} />
                <Text style={styles.title}>{data.number} Lessons ({data.duration})</Text>
                <View style={styles.line} />
                <FlatList
                    style={{height: 300}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item.id.toString()}
                    data={timeline}
                    renderItem={(data) => renderItem(data.item)}
                />
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
    title: {
        padding: 10,
        width: '100%',
        paddingVertical: 15
    },
    line: {
        width: '100%',
        height: 1,
        borderBottomWidth: 2,
        borderBottomColor: BASE_COLOR.blurYellow,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    timeline: {
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    txtTimeline: {
        fontWeight: '400',
        marginLeft: 10,
    },
    txtTime: {
        fontWeight: '300'
    }

})

export default CourseDetailScreen