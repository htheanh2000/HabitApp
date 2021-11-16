import { S_WIDTH } from '@/constants/layout'
import React, {FunctionComponent} from 'react'
import { StyleSheet, View } from 'react-native'
import  Text  from '../text'
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
            {leftIcon ? <Icon name={leftIcon} blurBackground/> : <View style={styles.emptyView}/>}
            <Text style={styles.title}>{title}</Text>
            {rightIcon ? <Icon name={rightIcon} blurBackground/> : <View style={styles.emptyView}/>}
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
        fontSize: 18
    },
    emptyView: {
        width: 40,
        height: 40
    }
})

export default Header