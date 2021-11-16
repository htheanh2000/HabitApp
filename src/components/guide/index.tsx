import { BASE_COLOR } from '@/constants/color'
import React, {FunctionComponent} from 'react'
import { Image, StyleSheet, View, ViewStyle } from 'react-native'
import  Icon  from '../icon'
import  Text  from '../text'
import img from '@/assets/images/Image.png' 

interface IProps {
    style?: ViewStyle
}
const Guide:FunctionComponent<IProps> = (props) => {
    const {style} = props
    return (
        <View style={[styles.container,style]}>
            <View style={styles.avatar}>
                <Image source={img}/>
            </View>
            <Text style={styles.title}>start this habit</Text>
            <Text style={styles.content}>Click here to start habits, we'll always follow and help you</Text>
            <Icon name='downArrow'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 12,
        backgroundColor: BASE_COLOR.white,
        justifyContent:'center',
        alignItems: 'center',
        marginTop: 20,
        paddingBottom: 20,
    },
    avatar: {
        backgroundColor: BASE_COLOR.white,
        position:'absolute',
        borderRadius:100,
        top: -25,
        overflow: 'hidden'
    },
    title: {
        textTransform: 'uppercase',
        fontSize: 20,
        marginTop: 70
    },
    content: {
        width: '80%',
        textAlign: 'center',
        fontWeight: '300',
        fontSize: 14,
        marginTop: 10,
        marginBottom: 20
    }
})

export default Guide