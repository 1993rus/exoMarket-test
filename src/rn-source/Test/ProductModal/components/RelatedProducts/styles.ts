import { makeStyles, normalize, PRODUCT_HEIGHT, PRODUCT_WIDTH } from '$app/utils'
import { StyleSheet } from 'react-native'

export const styles = makeStyles({
    container: {
        marginTop: 24,
    },
    flashList: {
        paddingHorizontal: 16,
    },
    separator: {
        width: 6,
    },
})

export const sStyles = StyleSheet.create({
    product: {
        width: PRODUCT_WIDTH,
        height: PRODUCT_HEIGHT,
        marginRight: normalize(6),
    },
})
