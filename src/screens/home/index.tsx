import { Header, Icon, Text } from '@/components'
import mainStyles from '@/constants/style'
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import {getWeekList} from '@/helper'
import { BASE_COLOR } from '@/constants/color'

const HomeScreen = () => {
    const [weeks, setWeek] = useState<any[]>()
    useEffect(() => {
        setWeek(getWeekList())
    }, [])

    const renderItem = (item: any) => {
        const {date, day, today} = item
        return (
            <View style={styles.dateBlock}> 
                {today && <View style={styles.today}/>}
                <Text style={styles.dateTxt}>{day}</Text>
                <Text>{date}</Text>
            </View>
        )
    }
    return(
        <View style={[mainStyles.container]}>
            <Icon name='cloud' style={styles.cloud}/>
            <View style={styles.container}>
              <Header leftIcon='menu' rightIcon='avatar' title='Homepage'/>
              <View style={styles.card}>
                  <Text style={styles.title}>We first make out habits, and then our habits make us.</Text>
                  <Text style={styles.author}>- ANONYMOUS</Text>
                  <Icon name='homepage' style={styles.cardImg} />
              </View>
              <View style={styles.habitsHeader}>
                  <Text style={styles.habitsTxt}>Habits</Text>
                  <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={weeks}
                    renderItem={({item}) => renderItem(item)}
                    keyExtractor={item => item.day}
                  />
              </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    cloud: {
        position:'absolute',
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
        position:'absolute',
        right: 0,
        zIndex: -1
    },
    title: {
        width: 200,
        fontWeight: '700',
        textTransform:'uppercase',
        lineHeight: 25
    },
    author: {
        fontWeight: '400',
        fontSize: 14,
        marginTop: 10
    },
    habitsHeader: {
        flexDirection:'row',
        alignItems:'center',
        marginTop: 20
    },
    habitsTxt: {
        fontWeight: '400',
        fontSize: 20,
        margin: 10,
        marginRight: 40
    },
    dateBlock: {
        width: 50,
        height: 50,
        borderRadius: 12,
        justifyContent:'center',
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
        position:'absolute',
        top: 2
    }
})

export default HomeScreen