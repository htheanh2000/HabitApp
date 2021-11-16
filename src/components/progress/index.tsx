import { BASE_COLOR } from '@/constants/color'
import React, {FunctionComponent} from 'react'
import { StyleSheet, View } from 'react-native'

interface IProps {
    status?: 'full' | 'half' | 'none'
}
const Progress: FunctionComponent<IProps> = (props) => {
    const {status} = props
    return(
        <View style={styles.container}>
            {status !== 'none' && <View style={styles.fullBlock}/> }
            {status === 'half' && <View style={styles.layer}/> }
        </View>
    )
}

Progress.defaultProps = {
    status: 'none'
}

const styles = StyleSheet.create({
    container: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: BASE_COLOR.blurYellow,
        overflow: 'hidden'
    },
    fullBlock: {
        flex: 1,
        margin: 4,
        borderRadius: 8,
        backgroundColor: BASE_COLOR.yellow
    },
    layer: {
        width: 50,
        height: 20,
        right: -10,
        top: -2,
        position:'absolute',
        transform: [{rotate: '45deg'}],
        backgroundColor: BASE_COLOR.blurYellow,
    }
})

export default Progress