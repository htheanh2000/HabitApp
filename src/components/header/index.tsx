import { S_WIDTH } from '@/constants/layout'
import React, {FunctionComponent} from 'react'
import { StyleSheet, View } from 'react-native'
import  Text  from '../text'
import  Icon, {IIconName} from '../icon'
import { useNavigation } from '@react-navigation/core'

interface IProps {
    leftIcon?: IIconName,
    title?: string,
    rightIcon?: IIconName
}
const Header: FunctionComponent<IProps>=(props)=> {
    const {leftIcon, title,rightIcon} = props
    const navigation = useNavigation()
    const onPressLeft = () => {
        switch (leftIcon) {
            case 'back':
                navigation.goBack()
                break;
            default:
                break;
        }
    }
    return(
        <View style={styles.container}>
            {leftIcon ? <Icon name={leftIcon} blurBackground onPress={onPressLeft}/> : <View style={styles.emptyView}/>}
            <Text numberOfLines={1} style={styles.title}>{title}</Text>
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
        fontSize: 18,
        textAlign: 'center'
    },
    emptyView: {
        width: 40,
        height: 40
    }
})

export default Header