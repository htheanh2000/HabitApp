import { BASE_COLOR } from '@/constants/color'
import React, {FunctionComponent} from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'
import Icon  from '../icon'
import Text from '../text'

interface IProps {
    title?: string,
    width?: number,
    style?: ViewStyle | ViewStyle[]
}

const Dropdown:FunctionComponent<IProps> = (props) => {
    const {title, width,style} = props
    return (
        <View style={[styles.container,style]}>
            <Text style={{...styles.text, width}}>{title}</Text>
            <Icon name='dropdown' style={styles.icon}/>
        </View>
    )
}

Dropdown.defaultProps = {
    title: '',
    width: 80
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: BASE_COLOR.white,
        padding: 7,
        paddingHorizontal: 20,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-around'
    },
    text: {
        fontWeight: '500'
    },
    icon: {
    }
})

export default Dropdown