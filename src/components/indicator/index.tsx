import { BASE_COLOR } from '@/constants/color'
import React, {forwardRef, FunctionComponent, useEffect, useImperativeHandle, useRef, useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface IRef {
    next: () => void
}

interface IProps {

}

const Indicator = forwardRef<IRef, IProps>((props, ref) => {
    const [list, setList] = useState<number[]>([])
    const [index, setIndex] = useState(1)
    const next = () => {
        setIndex(index =>  index < list.length ? index + 1 : 1)
    }
    useImperativeHandle(ref, () => ({ next }));
    useEffect(() => {
        const arr = []
      for (let index = 1; index <= 4; index++) {
          arr.push(index)
      }
      setList(arr)
    }, [])
    return (
        <View style={styles.container}>
            {list.map(item => <View key={item} style={[styles.indicator, index === item ? styles.focused : {}]}/>)}
        </View>
    )
})

const SIZE = 15
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    indicator: {
        width: SIZE,
        height: SIZE,
        borderRadius: SIZE,
        backgroundColor: BASE_COLOR.yellow,
        marginHorizontal: 3,
        borderWidth: 2,
        borderColor: BASE_COLOR.white,
    },
    focused: {
        backgroundColor: BASE_COLOR.brown,
        borderColor: BASE_COLOR.brown20,
    }
})

export default Indicator
