import { makeStyles } from '$app/utils'

export const styles = makeStyles({
    modal: {
        paddingBottom: 120,
    },
    container: {
        marginTop: 16,
    },
    wrapTitle: {
        marginTop: 8,
        flexDirection: 'row',
        gap: 12,
        paddingHorizontal: 16,
    },
    containerTags: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 6,
        flex: 1,
    },
    wrapTag: {
        height: 24,
        borderRadius: 8,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapBtn: {
        position: 'absolute',
        zIndex: 999,
        left: 20,
        top: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    wrapDescription: {
        paddingHorizontal: 16,
        marginTop: 20,
    },
})
