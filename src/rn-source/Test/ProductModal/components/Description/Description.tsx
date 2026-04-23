import React, { FC } from 'react'
import { View } from 'react-native'

import { theme } from '$app/constants'
import { TextView } from '$app/components'

import { styles } from './styles'

interface IProps {
    storage: string
    sostav: string
}

export const Description: FC<IProps> = ({ storage, sostav }) => {
    if (!storage && !sostav) return null
    return (
        <View style={styles.container}>
            {!!storage && (
                <>
                    <TextView textStyle={'15-700'} color={theme.black02}>
                        {'Условия хранения'}
                    </TextView>
                    <TextView textStyle={'14-400'} mt={10} lh={17}>
                        {storage?.trim()}
                    </TextView>
                </>
            )}
            {!!sostav && (
                <>
                    <TextView textStyle={'15-700'} color={theme.black02} mt={24}>
                        {'Состав'}
                    </TextView>
                    <TextView textStyle={'14-400'} mt={10} lh={17}>
                        {sostav?.trim()}
                    </TextView>
                </>
            )}
        </View>
    )
}
