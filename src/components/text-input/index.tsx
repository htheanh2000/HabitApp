import { BASE_COLOR } from '@/constants/color'
import { S_WIDTH } from '@/constants/layout'
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import Icon, { IIconName } from '../icon'
import Text from '../text'
interface IProps {
    icon?: IIconName,
    rightTxt?: string,
    placeholder?: string,
    backgroundColor?: string,
    showLine?: boolean,
    style?: any
}

interface IRef {
    getValue: () => string 
}

const Input = forwardRef<IRef, IProps>((props, ref) => {
    const { icon, rightTxt,style, placeholder, backgroundColor, showLine } = props
    const [value, setValue] = useState<string>('')
    const getValue = () => {
       return  value
    }
    useImperativeHandle(
        ref,
        () => ({
            getValue,
        }),
        [value],
    )
    return (
        <View style={[styles.input, { marginBottom: 7, backgroundColor: backgroundColor },style]}>
            {icon ? <Icon name={icon} style={styles.miniIcon} /> : <View style={{ marginLeft: 20 }} />}
            {showLine && <View style={styles.line} />}
            <TextInput value={value} onChangeText={setValue} style={styles.txtInput} placeholder={placeholder} />
            {rightTxt && <Text style={styles.showTxt}>{rightTxt}</Text>}
        </View>
    )
})

Input.defaultProps = {
    placeholder: '',
    backgroundColor: BASE_COLOR.blurYellow
}


const styles = StyleSheet.create({
    input: {
        height: 60,
        width: S_WIDTH-20,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    miniIcon: {
        marginLeft: 20,
        marginRight: 20
    },
    txtInput: {
        color: BASE_COLOR.brown,
        flex: 1,
    },
    showTxt: {
        fontSize: 13,
        textDecorationLine: 'underline',
        fontWeight: '400',
        marginRight: 20
    },
    line: {
        width: 1,
        height: 60,
        backgroundColor: BASE_COLOR.blurYellow,
        marginRight: 20
    }
})

export default Input