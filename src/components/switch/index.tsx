import { BASE_COLOR, BLUR_COLOR } from '@/constants/color'
import React, { FunctionComponent, useState } from 'react'
import { Pressable, StyleSheet, TextStyle, View, ViewStyle } from 'react-native'
import Text from '../text'

interface IProps {
    status?: boolean
    onPress?: () => void
}
const Switch: FunctionComponent<IProps> = (props) => {
    const {status,onPress} = props
    const [isActive, setStatus] = useState(status)

    const onPressLocal = () => {
        if(onPress) {
            onPress()
        }
        else {
            setStatus(!isActive)
        }
    }

    const getStyle = (): ViewStyle => {
        if (isActive) {
            return {
                flexDirection: 'row',
                backgroundColor: BLUR_COLOR.yellowSwitch20
            }
        }
        else {
            return {
                flexDirection: 'row-reverse',
            }
        }
    }

    const getToggleColor = (): ViewStyle => {
        return isActive ? { backgroundColor: BLUR_COLOR.yellowSwitch } : { backgroundColor: BASE_COLOR.violet }
    }

    const getTextColor = (): TextStyle => {
        return isActive ? { color: BLUR_COLOR.yellowSwitch } : { color: BASE_COLOR.violet }
    }

    return (
        <Pressable style={[styles.container, getStyle()]} onPress={onPressLocal}>
            <View style={[styles.togge, getToggleColor()]} />
            <Text style={{ ...styles.content, ...getTextColor() }}>{isActive ? 'On' : 'Off'}</Text>
        </Pressable>

    )
}

Switch.defaultProps = {
    status: true
}

const styles = StyleSheet.create({
    container: {
        height: 30,
        borderRadius: 20,
        backgroundColor: BLUR_COLOR.violet10,
        padding: 3,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5
    },
    togge: {
        width: 18,
        height: 18,
        borderRadius: 25,
        backgroundColor: BASE_COLOR.violet,
        shadowColor: "#eee",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    content: {
        fontSize: 12,
        marginHorizontal: 5,
    }
})
export default Switch