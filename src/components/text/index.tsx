import React, { FunctionComponent } from 'react'
import { Pressable, Text, TextStyle } from 'react-native'
import { BASE_COLOR } from '@/constants/color'
interface IProps {
    status?: 'NORMAL' | 'DEACTIVE' | string
    color?: string
    size?: number
    weight?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8,
    mleft?: number,
    mright?: number,
    mtop?: number,
    mbottom?: number,
    align?: 'center' | 'left' | 'right',
    style?: TextStyle | TextStyle[]
    type?: 'small' | 'normal',
    numberOfLines?: number,
    onPress?: () => void
}

const CustomText: FunctionComponent<IProps> = (props) => {
    const { children, color, size, weight, style,align, type, onPress, numberOfLines, mleft, mright, mtop, mbottom } = props


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
        fontWeight: `${weight || 6}00`,
        marginLeft: mleft,
        marginTop: mtop,
        textAlign: align,
        marginBottom: mbottom,
        marginRight: mright,
        fontSize: size,
        ...typeStyle,
        ...style,
    }
    if (!onPress) return <Text numberOfLines={numberOfLines} style={[numberOfLines ? { width: 200 } : {}, textStyle]}>{children}</Text>
    else return (
        <Pressable onPress={onPress}>
            <Text numberOfLines={numberOfLines} style={[numberOfLines ? { width: 200 } : {}, textStyle]}>{children}</Text>
        </Pressable>
    )
}

CustomText.defaultProps = {
    status: 'NORMAL',
    weight: 6,
    color: BASE_COLOR.brown,
    type: 'normal',
    mleft: 0,
    mright: 0,
    mbottom: 0,
    mtop: 0
}

export default CustomText