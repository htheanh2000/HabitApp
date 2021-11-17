import { Header, Icon, Screen, Text, Image } from '@/components'
import { BASE_COLOR } from '@/constants/color'
import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

const comment = [
    {
        id: 1,
        image: 'ava1',
        name: 'Jerome',
        lastOnline: 41,
        love: 3100,
        cmt: 22,
        content: `Man, you're my new guru! Viewing the lessons for a second time. Thoroughly pleased. And impressed that you draw from scientific literature in telling memorable`
    },
    {
        id: 2,
        image: 'ava2',
        name: 'Gretchen',
        lastOnline: 1,
        love: 10300,
        cmt: 103,
        content: `I loved the course! I've been trying to break all this great stuff down into manageable chunks to help my clients develop healthy habits and achieve their personal `
    },
    {
        id: 3,
        image: 'ava3',
        name: 'AI',
        lastOnline: 32,
        love: 1000,
        cmt: 4,
        content: `This course contains the most complete material on habit formation that I've seen. There is just enough theory to explain the principles, and not so much`
    },
    {
        id: 4,
        image: 'ava4',
        name: 'Jerome',
        lastOnline: 56,
        love: 7800,
        cmt: 85,
        content: `James Clear's Habit's Academy course has tremendously changed my life for the better! Having been a self improvement aficionado for decades`
    }
]

const CommunityScreen = () => {

    const renderItem = (item: any) => {
        const { id, image, name, lastOnline, love, cmt, content } = item
        return (
            <View style={styles.card}>
                <View style={styles.row}>
                    <Image name={image} />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.lastOnl}>{lastOnline}m ago</Text>
                    </View>
                </View>
                <View style={styles.line} />
                <Text numberOfLines={3} style={styles.content}>{content}</Text>
                <View style={styles.react}>
                    <View style={[styles.row, { marginRight: 20 }]}>
                        <Icon name='love' />
                        <Text style={styles.love}> {love / 1000}k</Text>
                    </View>
                    <View style={styles.row}>
                        <Icon name='comment' />
                        <Text style={styles.cmt}> {cmt}</Text>
                    </View>
                </View>
                <Icon name='share' style={styles.share}/>
            </View>
        )
    }

    return (
        <Screen>
            <Header leftIcon='menu' title='Community' rightIcon='community' />
            <FlatList
                style={{ marginTop: 20 }}
                showsVerticalScrollIndicator={false}
                data={comment}
                keyExtractor={item => item.id.toString()}
                renderItem={(data) => renderItem(data.item)}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 12,
        backgroundColor: BASE_COLOR.white,
        padding: 10,
        marginBottom: 10
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    line: {
        height: 1,
        flex: 1,
        borderWidth: .5,
        borderColor: BASE_COLOR.yellow,
        marginVertical: 10
    },
    name: {
        fontWeight: '700'
    },
    lastOnl: {
        fontWeight: '200',
        fontSize: 14
    },
    content: {
        fontWeight: '400',
        width: '100%'
    },
    react: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: 10
    },
    love: {
        fontSize: 12,
        fontWeight: '400'
    },
    cmt: {
        fontSize: 12, 
        fontWeight: '400' 
    },
    share: {
        position: 'absolute',
        right: 12,
        top: 12
    }

})

export default CommunityScreen