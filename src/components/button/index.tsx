import { BASE_COLOR } from '@/constants/color'
import { S_WIDTH } from '@/constants/layout'
import React, {FunctionComponent} from 'react'
import {  Pressable, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native'
import Text from '../text'

interface IProps {
    onPress?: () => void
    style?: ViewStyle
}
const Button:FunctionComponent<IProps> = (props) => {
    const {children, onPress,style} = props
    return (
        <TouchableOpacity style={[styles.container,style]} onPress={onPress}>
            <Text onPress={onPress}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: S_WIDTH-20,
        height: 60,
        backgroundColor: BASE_COLOR.yellow,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,

    }
})

export default Button