import { Screen, Text, Header, Icon, Dropdown, Image } from '@/components'
import { BASE_COLOR } from '@/constants/color'
import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { FlatList, Pressable, StyleSheet, View } from 'react-native'

const LESSONS = [
    {
        id: 1,
        title: '30 Day Journal Challenge - Establish a Habit of Daily Journaling',
        duration: '2h 41m',
        number: 37,
        img: 'lesson1'
    },
    {
        id: 2,
        title: 'Self Help Series: How to Create and Maintain Good Habits',
        duration: '4h 6m',
        number: 42,
        img: 'lesson2'
    }
]

const CourseScreen = () => {
    const navigation = useNavigation()
    const renderItem = (item: any) => {
        const onPressLesson = () => {
            navigation.navigate('course-detail' as never, item as never)
        }

        return (
            <Pressable style={styles.lesCard} onPress={onPressLesson}>
                <Image name={item.img} />
                <View style={styles.lesContentView}>
                    <Text style={styles.lesContentTitle}>{item.title}</Text>
                    <Text style={styles.lesDuration}>{item.duration}</Text>
                    <Text style={styles.lesNumber}>{item.number} Lessons</Text>
                    <Icon name='mark' style={styles.lesIcon}/>
                </View>
            </Pressable>
        )
    }

    return (
        <Screen cloudBg>
            <Header leftIcon='menu' title='Courses' rightIcon='search' />
            <View style={styles.card}>
                <Icon name='coursesBg' style={styles.revert} />
                <Text style={styles.title}>Habits</Text>
                <Text style={styles.title}>Courses</Text>
                <Text style={styles.content}>Find what fascinates you as you explore these habit courses. </Text>
            </View>
            <View style={styles.sortView}>
                <Text>Sort By: </Text>
                <View style={styles.dropView}>
                    <Dropdown title='Popular' width={100} />
                    <Dropdown title='Filters' width={60} />
                </View>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={LESSONS}
                keyExtractor={(item: any) => item.id}
                renderItem={(data => renderItem(data.item))}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 20,
        marginTop: 20
    },
    revert: {
        position: 'absolute',
        transform: [{ rotateX: '180deg' }]
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        textTransform: 'uppercase'
    },
    content: {
        fontWeight: '300',
        width: 240,
        fontSize: 14,
        marginTop: 10
    },
    sortView: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20,
    },
    dropView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 10
    },
    lesCard: {
        backgroundColor: BASE_COLOR.white,
        borderRadius: 10,
        marginBottom: 20
    },
    lesContentView: {
        paddingHorizontal: 10,
        borderRadius: 12,
        overflow: 'hidden'
    },
    lesContentTitle: {
        fontSize: 20,
        marginVertical: 10
    },
    lesDuration: {
        fontWeight: '500',
        fontSize: 14
    },
    lesNumber: {
        marginBottom: 10,
        fontSize: 12,
        fontWeight: '300',
    },
    lesIcon: {
        position: 'absolute',
        bottom: 10,
        right: 10
    }
})
export default CourseScreen