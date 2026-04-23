import React, { FC, useCallback } from 'react'
import { View } from 'react-native'
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated'
import FastImage from '@d11/react-native-fast-image'
import { FlatList } from 'react-native-gesture-handler'

import { BASE_DOMAIN } from '$app/constants'
import { Indicators } from '$app/components'
import { IProductImage } from '$app/services'

import { styles } from './styles'

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList<IProductImage>)

interface IProps {
    images: IProductImage[]
}

export const ProductPhotos: FC<IProps> = ({ images }) => {
    const offset = useSharedValue(0)

    const scrollHandler = useAnimatedScrollHandler(
        {
            onScroll: event => {
                offset.value = event.contentOffset.x
            },
        },
        [],
    )

    const renderItem = useCallback(({ item }: { item: IProductImage }) => {
        return <FastImage source={{ uri: BASE_DOMAIN + item.big }} style={styles.image} resizeMode={'cover'} />
    }, [])

    const renderSeparator = useCallback(() => <View style={styles.separator} />, [])

    if (!images.length) {
        return <View style={styles.image} />
    }

    return (
        <View>
            <AnimatedFlatList
                onScroll={scrollHandler}
                nestedScrollEnabled
                horizontal
                data={images}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                renderItem={renderItem}
                scrollEnabled={images.length > 1}
                contentContainerStyle={styles.list}
                ItemSeparatorComponent={renderSeparator}
            />
            {images.length > 1 && <Indicators length={images.length} offset={offset} />}
        </View>
    )
}
