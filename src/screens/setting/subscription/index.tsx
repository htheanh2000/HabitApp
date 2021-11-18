import { Button, Header, Icon, Screen, Text } from '@/components'
import { BASE_COLOR, BLUR_COLOR } from '@/constants/color'
import React from 'react'
import { Pressable, ScrollView, StyleSheet, View } from 'react-native'

const SubscriptionScreen = () => {

    const Feature = (props: { text: string, noBotLine?: boolean }) => {
        const { text, noBotLine } = props
        return (
            <>
                <View style={styles.rowFea}>
                    <Icon name='tick' />
                    <Text style={styles.feaTxt}>{text}</Text>
                </View>
                {!noBotLine && <View style={styles.line} />}
            </>
        )
    }
    return (
        <Screen>
            <Header leftIcon='back' title='Premium' />
            <View style={{paddingBottom: 20}}/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={[styles.card]}>
                    <Text style={styles.title}>60% of your upgrade</Text>
                    <Text style={styles.content}>Expired in</Text>
                    <View style={styles.row}>
                        <View style={styles.block}>
                            <Text>23</Text>
                        </View>
                        <Text style={styles.twoDot}>:</Text>
                        <View style={styles.block}>
                            <Text>56</Text>
                        </View>
                        <Text style={styles.twoDot}>:</Text>
                        <View style={styles.block}>
                            <Text>48</Text>
                        </View>
                    </View>
                    <Icon name='subscription' style={styles.cardImg} />
                </View>

                <View style={styles.unlockCard}>
                    <Text style={styles.unlockTit}>Unlock Monumental Habits</Text>
                    <View style={styles.line} />
                    <Feature text='Unlimited habits' />
                    <Feature text='Access to all courses' />
                    <Feature text='Access to all avatar illustrations' noBotLine />
                </View>

                <View style={[styles.row, { marginVertical: 20 }]}>
                    <View style={styles.option}>
                        <Text style={styles.price}>$19.00</Text>
                        <Text style={styles.optionContent}>1-month plan for 18.99 usd</Text>
                        <View style={styles.line} />
                        <Text style={styles.optDuration}>Monthly</Text>
                    </View>
                    <View style={styles.option}>
                        <Text style={styles.popular}>Most popular</Text>
                        <Text style={styles.price}>$39.00</Text>
                        <Text style={styles.optionContent}>6-month plan for 38.99 usd</Text>
                        <View style={styles.line} />
                        <Text style={styles.optDuration}>Monthly</Text>
                    </View>
                    <View style={styles.option}>
                        <Text style={styles.price}>$59.00</Text>
                        <Text style={styles.optionContent}>1-year plan for 58.99 usd</Text>
                        <View style={styles.line} />
                        <Text style={{...styles.optDuration, marginRight: 10}}>Lifetime</Text>
                        <Text style={styles.discount}>75%</Text>
                    </View>
                </View>
                <Button>Subcribe now</Button>
                <View style={styles.secureView}>
                    <Icon name='secure'/>
                    <Text style={styles.secureTxt}>  Secured with Goggle Play. Cancel anytime</Text>
                </View>
                <Text style={styles.restore}>Restore Purchase</Text>
                <View style={styles.termView}>
                    <Text style={styles.termTxt}>Term of Service</Text>
                    <Text style={styles.and}>  and  </Text>
                    <Text style={styles.termTxt}>Privacy Policy</Text>
                </View>

                <View style={{paddingBottom: 50}}/>
            </ScrollView>
        </Screen>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 12,
        overflow: 'hidden',
        padding: 20,
        marginBottom: 10
    },
    title: {
        fontSize: 22,
        color: BASE_COLOR.yellow
    },
    content: {
        marginTop: 5,
        fontSize: 16,
        fontWeight: '300',
        marginBottom: 20
    },
    cardImg: {
        position: 'absolute',
        right: 0,
        zIndex: -1
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    block: {
        width: 40,
        height: 40,
        backgroundColor: BLUR_COLOR.blurViolet,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    twoDot: {
        marginHorizontal: 5
    },
    unlockCard: {
        backgroundColor: 'white',
        borderRadius: 12,
        marginTop: 10,
        paddingVertical: 10,
    },
    line: {
        borderWidth: .5,
        borderColor: BASE_COLOR.yellow,
        marginVertical: 10
    },
    unlockTit: {
        textAlign: 'center',
        fontSize: 22,
    },
    rowFea: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 5,
    },
    feaTxt: {
        marginLeft: 15,
        fontSize: 18,
        fontWeight: '300'
    },
    option: {
        backgroundColor: 'white',
        borderRadius: 12,
        paddingBottom: 10,
        paddingHorizontal: 0,
        flex: 1,
        margin: 5,
        overflow: 'hidden'
    },
    price: {
        textAlign: 'center',
        fontSize: 22,
        color: BASE_COLOR.yellow,
        paddingTop: 10,
    },
    optionContent: {
        fontSize: 10,
        marginTop: 10,
        paddingHorizontal: 10,
        textAlign: 'center',
        fontWeight: '400'
    },
    optDuration: {
        fontSize: 14,
        textAlign: 'center'
    },
    discount: {
        position: 'absolute',
        textAlign: 'center',
        padding: 5,
        paddingBottom: 30,
        paddingHorizontal: 30,
        transform: [{ rotate: '-45deg' }],
        backgroundColor: BASE_COLOR.yellow,
        bottom: -18,
        right: -38,
        zIndex: -1,
        fontSize: 14
    },
    popular: {
        textAlign: 'center',
        backgroundColor: BASE_COLOR.yellow,
        paddingVertical: 5,
        fontSize: 14
    },
    secureTxt: {
        fontSize: 14,
        fontWeight: '400'
    },
    secureView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        justifyContent:'center'
    },
    restore: {
        color: BASE_COLOR.yellow,
        textAlign: 'center',
        marginTop: 20,
        textDecorationLine: 'underline',
    },
    termView: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10
    },
    and: {
        fontWeight: '400',
        textDecorationLine: 'underline',
    },
    termTxt: {
        textDecorationLine: 'underline',
    }
})
export default SubscriptionScreen