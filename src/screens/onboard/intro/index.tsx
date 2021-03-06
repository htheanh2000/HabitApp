import { Button, Indicator, Text } from '@/components'
import React, { createRef, useState } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { content, title } from './content'
import { View } from 'react-native'
import { S_HEIGHT, S_WIDTH } from '@/constants/layout'
import { BASE_COLOR } from '@/constants/color'
import { useNavigation } from '@react-navigation/core'
import { transform } from '@babel/core'

interface IRef {
    next: () => void
}

const IntroScreen = () => {
    const indicatorRef = createRef<IRef>()
    const navigation = useNavigation()
    const [index, setIndex] = useState(0)
    const getColor = (color: string) => {
        const colorStr = color as keyof typeof BASE_COLOR
        return BASE_COLOR[colorStr]
    }
    const onPressNext = () => {
        setIndex(index => index < title.length ? index + 1 : 1)
        indicatorRef.current?.next()
    }
    const renderImage = (Icon: any) => {
        return <Icon />
    }
    const getStarted = () => {
        navigation.navigate('sign-in' as never)
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contentView}>
                <Text style={styles.title}>{title[index].text}</Text>
                <View style={[styles.image, index === 0 && {transform: [{ rotateX: '180deg' }]}]}>
                    {renderImage(title[index].image)}
                </View>
                {
                    content.map((item, index) =>
                        <Text key={item.text + index} color={getColor(item.color)} style={styles.content}>{item.text} </Text>)
                }
            </View>
            {
                index === title.length - 1 ?
                    <Button onPress={getStarted}>GET STARTED</Button>
                    : <View style={styles.control}>
                        <Text onPress={getStarted}>Skip</Text>
                        <Indicator ref={indicatorRef} />
                        <Text onPress={onPressNext}>Next</Text>
                    </View>
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: BASE_COLOR.white
    },
    title: {
        marginBottom: 50,
        fontSize: 24,
        width: S_WIDTH * 2 / 3,
        textAlign: 'center',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    contentView: {
        flexDirection: 'row',
        width: S_WIDTH * 4 / 5,
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 30,
        height: S_HEIGHT * 3 / 4
    },
    content: {
        textTransform: 'uppercase',
        fontSize: 18,
        marginBottom: 10,
        fontWeight: '600'
    },
    control: {
        marginTop: 30,
        flexDirection: 'row',
        width: S_WIDTH,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    image: {
        marginTop: 20,
        height: S_HEIGHT / 2,
    }

})

export default IntroScreen