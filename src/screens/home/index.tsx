import { Header } from '@/components'
import mainStyles from '@/constants/style'
import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

const HomeScreen = () => {
    return(
        <View style={[mainStyles.container]}>
            <View style={styles.container}>
              <Header leftIcon='menu' rightIcon='avatar' title='Homepage'/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    }
})

export default HomeScreen