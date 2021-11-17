import { BASE_COLOR } from '@/constants/color'
import { S_WIDTH } from '@/constants/layout'
import { useNavigation } from '@react-navigation/core'
import React, {FunctionComponent} from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'
import Icon from '../icon'

interface IProps {
    style?: ViewStyle,
    bottomIcon?: boolean
}

const Screen: FunctionComponent<IProps> = (props) => {
    const {children, style,bottomIcon} = props
    const navigation = useNavigation()
    const onPressAddBtn = () => {
        navigation.navigate('new-habit' as never)
    }
    return (
        <View style={[styles.container, style]}>
            {children}
            {bottomIcon && <Icon name='add' style={styles.addBtn} onPress={onPressAddBtn}/>}
        </View>
    )
}

Screen.defaultProps = {
    bottomIcon: true
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BASE_COLOR.blurYellow     
    },
    addBtn: {
        position:'absolute',
        left: S_WIDTH/2,
        transform: [{translateX: -31}],
        bottom: 52,
    }
})

export default Screen