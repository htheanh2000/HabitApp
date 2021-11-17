import { Header, Icon, Screen, Text } from '@/components'
import { IIconName } from '@/components/icon'
import { BASE_COLOR } from '@/constants/color'
import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

const SettingScreen = () => {

    const SupportCard = ({ icon, name }: { icon: IIconName, name: string }) => {
        return (
            <View style={styles.smlCard}>
                <View style={styles.row}>
                    <Icon name={icon} />
                    <View style={styles.contentView}>
                        <Text style={styles.smlTitle}>{name}</Text>
                    </View>
                </View>
                <Icon name='viRiArrow' style={styles.rightArrow} />
            </View>
        )
    }

    const GeneralCard = ({ icon, title, subTitle }: { icon: IIconName, title: string, subTitle: string }) => {
        return (
            <View style={styles.smlCard}>
                <View style={styles.row}>
                    <Icon name={icon} />
                    <View style={styles.contentView}>
                        <Text style={styles.smlTitle}>{title}</Text>
                        <Text style={styles.smlContent}>{subTitle}</Text>
                    </View>
                </View>
                <Icon name='viRiArrow' style={styles.rightArrow} />
            </View>
        )
    }

    return (
        <Screen>
            <Header leftIcon='menu' title='Settings' />
            <View style={[styles.card]}>
                <Text style={styles.title}>Check your profile</Text>
                <Text style={styles.content}>htheanh2000@gmail.com</Text>
                <View style={styles.btn}>
                    <Text>View</Text>
                </View>
                <Icon name='homepage' style={styles.cardImg} />
            </View>
            <ScrollView>

                <Text style={styles.section}>General</Text>
                <GeneralCard icon='notification' title='Notifications' subTitle='Customize notifications' />
                <GeneralCard icon='threeDot' title='More custimization' subTitle='Customize it more to fit your usage' />

                <Text style={styles.section}>Support</Text>
                <SupportCard name='Contact' icon='contact' />
                <SupportCard name='Feedback' icon='feedback' />
                <SupportCard name='Privacy Policy' icon='policy' />
                <SupportCard name='About' icon='about' />
            </ScrollView>
        </Screen>
    )
}

const styles = StyleSheet.create(({
    card: {
        backgroundColor: 'white',
        borderRadius: 12,
        overflow: 'hidden',
        marginTop: 30,
        padding: 20,
        marginBottom: 10
    },
    smlCard: {
        backgroundColor: 'white',
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        paddingVertical: 15,
        marginBottom: 10
    },
    cardImg: {
        position: 'absolute',
        right: 0,
        zIndex: -1
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    btn: {
        backgroundColor: BASE_COLOR.yellow,
        width: 120,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    title: {
        fontSize: 22
    },
    content: {
        marginTop: 5,
        fontSize: 12,
        fontWeight: '300'
    },
    section: {
        marginVertical: 15,
        fontWeight: '400'
    },
    contentView: {
        marginLeft: 10
    },
    smlTitle: {
        fontWeight: '400'
    },
    smlContent: {
        fontSize: 14,
        fontWeight: '300'
    },
    rightArrow: {
        marginRight: 10
    }
}))

export default SettingScreen