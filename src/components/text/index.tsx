import React, { FunctionComponent } from 'react'
import { Pressable, Text, TextStyle } from 'react-native'
import { BASE_COLOR } from '@/constants/color'
interface IProps {
    status?: 'NORMAL' | 'DEACTIVE' | string
    color?: string
    fontSize?: number
    fontWeight?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | 'bold' | 'normal'
    style?: TextStyle
    type?: 'small' | 'normal'
    onPress?: () => void
}

const CustomText: FunctionComponent<IProps> = (props) => {
    const { children, color, fontSize, fontWeight, style, type, onPress } = props


    const getStyleByType = (): TextStyle => {
        switch (type) {
            case 'small':
                return {
                    fontSize: 13,
                    fontWeight: '300',
                    textAlign: 'center'
                }
            default:
                return {};
        }
    }

    const typeStyle: TextStyle = getStyleByType()

    const textStyle: TextStyle = {
        color: color || BASE_COLOR.brown,
        fontWeight: fontWeight,
        fontSize,
        ...typeStyle,
        ...style,
    }
    if(!onPress) return <Text style={[textStyle]}>{children}</Text>
    else return (
        <Pressable onPress={onPress}>
            <Text style={[textStyle]}>{children}</Text>
        </Pressable>
    )
}

CustomText.defaultProps = {
    status: 'NORMAL',
    fontSize: 16,
    fontWeight: '600',
    color: BASE_COLOR.brown,
    type: 'normal'
}

export default CustomText