import { S_WIDTH } from '@/constants/layout'
import React, {FunctionComponent} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import  Icon, {IIconName} from '../icon'

interface IProps {
    leftIcon?: IIconName,
    title?: string,
    rightIcon?: IIconName
}
const Header: FunctionComponent<IProps>=(props)=> {
    const {leftIcon, title,rightIcon} = props
    return(
        <View style={styles.container}>
            {leftIcon ? <Icon name={leftIcon} blurBackground/> : <View/>}
            <Text style={styles.title}>{title}</Text>
            {rightIcon ? <Icon name={rightIcon} blurBackground/> : <View/>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        marginTop: 50
    },
    title: {
        fontWeight: '400',
        fontSize: 18
    }
})

export default Header