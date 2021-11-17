import { BASE_COLOR } from '@/constants/color'
import { S_WIDTH } from '@/constants/layout'
import { useNavigation } from '@react-navigation/core'
import React, { FunctionComponent } from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'
import Icon from '../icon'

interface IProps {
    style?: ViewStyle,
    bottomIcon?: boolean,
    cloudBg?: boolean,
    paddingHorizontal?: number
}

const Screen: FunctionComponent<IProps> = (props) => {
    const { children, style, bottomIcon, cloudBg, paddingHorizontal } = props
    const navigation = useNavigation()
    const onPressAddBtn = () => {
        navigation.navigate('new-habit' as never)
    }
    return (
        <View style={[styles.container, style, paddingHorizontal ? { paddingHorizontal } : {}]}>
            {cloudBg && <Icon name='cloud' style={styles.cloud} />}
            {children}
            {bottomIcon && <Icon name='add' style={styles.addBtn} onPress={onPressAddBtn} />}
        </View>
    )
}

Screen.defaultProps = {
    bottomIcon: true,
    paddingHorizontal: 10
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BASE_COLOR.blurYellow,
        paddingBottom: 80
    },
    addBtn: {
        position: 'absolute',
        left: S_WIDTH / 2,
        transform: [{ translateX: -31 }],
        bottom: 52,
    },
    cloud: {
        position: 'absolute',
        bottom: 0,
    },
})

export default Screen