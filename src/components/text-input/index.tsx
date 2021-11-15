import { BASE_COLOR } from '@/constants/color'
import { S_WIDTH } from '@/constants/layout'
import React, { FunctionComponent } from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import Icon, { IIconName } from '../icon'
import Text from '../text'

interface IProps  {
    icon?: IIconName ,
    rightTxt?: string,
    placeholder?: string,
    backgroundColor?: string,
    showLine?: boolean
}

const TextInputCustom: FunctionComponent<IProps> = (props) => {
    const {icon, rightTxt, placeholder, backgroundColor, showLine} = props
    return (
        <View style={[styles.input, { marginBottom: 7, backgroundColor: backgroundColor}]}>
            {icon ? <Icon name={icon} style={styles.miniIcon} /> : <View style={{marginLeft: 20}}/>}
            {showLine && <View style={styles.line}/>}
            <TextInput style={styles.txtInput} placeholder={placeholder} />
            {rightTxt && <Text style={styles.showTxt}>{rightTxt}</Text>}
        </View>
    )
}

TextInputCustom.defaultProps = {
    placeholder: ''
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: BASE_COLOR.blurYellow,
        height: 60,
        width: S_WIDTH - 50,
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

export default TextInputCustom