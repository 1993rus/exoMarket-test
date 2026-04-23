import { StyleSheet } from 'react-native'
import { theme } from '$app/constants'
import { makeStyles, normalize, SCREEN_WIDTH } from '$app/utils'

export const styles = makeStyles({
    flex: { flex: 1 },
    wrapText: {
        padding: 14,
    },
    wrapDaily: {
        width: '45%',
        height: '100%',
        backgroundColor: theme.blue01,
        justifyContent: 'center',
    },
    empty: {
        width: '55%',
        height: '100%',
    },
    containerDaily: {
        height: 28,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    wrapRow: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 28,
        backgroundColor: theme.green03,
        width: '100%',
        justifyContent: 'space-between',
    },
    wrapValue: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '100%',
        alignItems: 'center',
        width: '40%',
    },
    wrapPercent: {
        backgroundColor: theme.blue01,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        width: 48,
    },
    decoration: {
        height: 1,
        backgroundColor: theme.black,
        marginHorizontal: 10,
    },
    wrapWeight: {
        height: 28,
        justifyContent: 'center',
        borderBottomColor: theme.black,
        borderBottomWidth: 1,
        marginHorizontal: 10,
    },
    wrapCal: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.orange04,
        height: 28,
    },
    cal: {
        width: '60%',
        paddingLeft: 12,
    },
    cal2: {
        width: '40%',
    },
    decoration2: {
        height: 3,
        backgroundColor: theme.black,
        marginHorizontal: 10,
    },
})

export const sStyles = StyleSheet.create({
    container: {
        marginTop: normalize(30),
        width: SCREEN_WIDTH - normalize(100),
        borderWidth: normalize(1),
        borderColor: theme.black,
        backgroundColor: theme.gray01,
        marginBottom: normalize(20),
    },
})
