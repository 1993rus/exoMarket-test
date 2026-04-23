import React, { FC, useCallback, useMemo } from 'react'
import { View } from 'react-native'
import { FlashList } from '@shopify/flash-list'
import { ScrollView } from 'react-native-gesture-handler'

import { TextView, ProductCard } from '$app/components'
import { stores } from '$app/stores'
import { IItem } from '$app/types'
import { EEvent, eventAppMetrica } from '$app/appMetrica'

import { styles, sStyles } from './styles'

interface IProps {
    relatedIds: string[]
}

export const RelatedProducts: FC<IProps> = ({ relatedIds }) => {
    const {
        catalogueStore: { relatedProductsModalRef, catalogueProducts },
        userStore: { userGroup },
    } = stores
    const validRelatedIds = useMemo(() => {
        return relatedIds.filter(id => catalogueProducts[id])
    }, [relatedIds, catalogueProducts])

    const reportEvent = useCallback(
        async (title?: string) => {
            eventAppMetrica(EEvent.TakeWithProduct, { userGroup, title })
        },
        [userGroup],
    )

    const renderItem = useCallback(({ item }: IItem) => {
        return <ProductCard id={item} style={sStyles.product} onPress={reportEvent} isOnePhoto />
    }, [])

    if (!validRelatedIds.length) return

    return (
        <View style={styles.container}>
            <TextView ml={16} mb={16} textStyle={'20-700'}>
                {'С этим товаром берут'}
            </TextView>
            <FlashList
                renderScrollComponent={ScrollView}
                ref={relatedProductsModalRef}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={renderItem}
                contentContainerStyle={styles.flashList}
                data={validRelatedIds}
            />
        </View>
    )
}
