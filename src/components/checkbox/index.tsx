import React, { FunctionComponent, useState } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import Text from '../text'
import Icon from '../icon'
import { BASE_COLOR } from '@/constants/color'

interface IProps {
    isFocus?: boolean
    text?: string
}

const CheckBox: FunctionComponent<IProps> = (props) => {
    const { isFocus, text } = props
    const [isFocused, setFocus] = useState(isFocus)
    const onPress =()=> {
        setFocus(!isFocused)
    }
    return (
        <View style={styles.container}>
            <Pressable style={styles.icon} onPress={onPress}>
                {isFocused && <Icon name='check' />}
            </Pressable>
            <Text style={styles.txt}>{text}</Text>
        </View>
    )
}

CheckBox.defaultProps = {
    isFocus: false
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    icon: {
        marginRight: 10,
        width: 20,
        height: 20,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: BASE_COLOR.yellow
    },
    txt: {
        fontWeight: '400',
    }
})

export default CheckBox
