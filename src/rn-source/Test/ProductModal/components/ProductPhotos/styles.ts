import { StyleSheet } from 'react-native'
import { normalize, SCREEN_WIDTH } from '$app/utils'
import { theme } from '$app/constants'

export const styles = StyleSheet.create({
    image: {
        width: SCREEN_WIDTH - normalize(16),
        aspectRatio: 1,
        borderRadius: normalize(24),
        backgroundColor: theme.bg,
    },
    list: {
        paddingHorizontal: normalize(10),
    },
    separator: {
        width: normalize(10),
    },
})
