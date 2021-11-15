import React, { FunctionComponent } from 'react'
import { Text, TextStyle } from 'react-native'
import { BASE_COLOR } from '@/constants/color'
interface IProps {
    status?: 'NORMAL' | 'DEACTIVE' | string
    color?: string
    fontSize?: number
    fontWeight?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | 'bold' | 'normal'
    style?: TextStyle 
}

const CustomText: FunctionComponent<IProps> = (props) => {
    const { children, color, fontSize, fontWeight, style } = props

    const textStyle:TextStyle = {
        color: color || BASE_COLOR.brown,
        fontWeight: fontWeight,
        fontSize,
        ...style,
    }

    return (
        <Text style={textStyle}>{children}</Text>
    )
}

CustomText.defaultProps = {
    status: 'NORMAL',
    fontSize: 16,
    fontWeight: '600',
    color: BASE_COLOR.brown
}

export default CustomText