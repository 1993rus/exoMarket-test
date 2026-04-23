import React, { FC, useCallback, useMemo } from 'react'
import { observer } from 'mobx-react-lite'
import { computed } from 'mobx'
import { View } from 'react-native'
import { useRoute } from '@react-navigation/core'
import { BottomSheetScrollView } from '@gorhom/bottom-sheet'
import Share from 'react-native-share'

import {
    AmountControl,
    HtmlView,
    ModalSheet,
    ProductVariations,
    SvgIcon,
    TextView,
    TouchableCustom,
} from '$app/components'
import { stores } from '$app/stores'
import { circle, getWeight } from '$app/utils'
import { theme } from '$app/constants'
import { EEvent, eventAppMetrica } from '$app/appMetrica'

import { Description, EnergyNutritional, ProductPhotos, RelatedProducts } from './components'
import { styles } from './styles'
import { AppNavigator, EModalsStack, Stacks } from '$app/navigation'

interface IProps {
    id: string
    isHideAddBtn?: boolean
}

export const ProductModal: FC = observer(() => {
    const {
        catalogueStore: { getProductStore, getTagsData, productScrollViewRef, catalogueProducts, openProduct },
        userStore: { toggleFavoriteProduct, getIsFavorite, userGroup },
    } = stores
    const params = useRoute().params as IProps
    const productStore = computed(() => getProductStore(params.id)).get()
    const product = productStore?.product.value
    const tagsToRender = getTagsData(product)
    const isFavorite = getIsFavorite(params.id)
    const edZim = catalogueProducts?.[params.id]?.ed_izm || product?.ed_izm || ''

    const renderTags = useMemo(() => {
        return (
            <View style={styles.containerTags}>
                {tagsToRender.map(tag => (
                    <View key={tag.key} style={[styles.wrapTag, { backgroundColor: tag.background }]}>
                        <TextView textStyle={'14-500'} lh={14}>
                            {tag.title}
                        </TextView>
                    </View>
                ))}
            </View>
        )
    }, [tagsToRender])

    const handleLike = useCallback(() => {
        if (!product) return
        toggleFavoriteProduct(product)
    }, [product])

    const openDebugCode = useCallback(() => {
        AppNavigator.push(Stacks.ModalsStack, { screen: EModalsStack.DebugCodeModal })
    }, [])

    const onShare = useCallback(async (): Promise<void> => {
        if (!product) return
        const shareOptions = {
            subject: 'Поделиться продуктом',
            title: 'Поделиться продуктом',
            message: `${product?.title}\nПосмотреть подробнее можно:\nНа сайте https://ecomarket.ru/${product?.url}\nВ мобильном приложении: https://4392310.redirect.appmetrica.yandex.com/ecomarket.ru/Product/${params.id}?appmetrica_tracking_id=317602437802290453&id=${params.id}`,
        }
        try {
            await Share.open(shareOptions)
            eventAppMetrica(EEvent.ShareProduct, { userGroup })
        } catch (e) {
            console.log(e)
        }
    }, [params.id, userGroup])

    const handleSelectVariation = useCallback(async (id: string) => {
        await openProduct(id, false, 'navigate')
    }, [])

    if (!product) return

    return (
        <ModalSheet isOnlyChildren snapPoints={['100%']}>
            <View>
                <BottomSheetScrollView
                    ref={productScrollViewRef}
                    contentContainerStyle={styles.modal}
                    showsVerticalScrollIndicator={false}
                    bounces={false}>
                    {product?.availableones > 0 && (
                        <View style={styles.wrapBtn}>
                            <TouchableCustom style={circle(36, theme.KTIconsBg)} onPress={handleLike}>
                                <SvgIcon
                                    icon={'Heart'}
                                    fill={isFavorite ? theme.errorRed : undefined}
                                    stroke={isFavorite ? theme.errorRed : theme.darkIcons}
                                    size={17}
                                />
                            </TouchableCustom>
                            <TouchableCustom style={circle(36, theme.KTIconsBg)} onPress={onShare}>
                                <SvgIcon icon={'Share'} fill={theme.darkIcons} size={17} />
                            </TouchableCustom>
                        </View>
                    )}
                    <ProductPhotos images={product.images} />
                    <View style={styles.container}>
                        <TouchableCustom delayLongPress={5000} onLongPress={openDebugCode} activeOpacity={1}>
                            <TextView textStyle={'20-700'} ml={16} mr={16}>
                                {product.title?.trim()}
                            </TextView>
                        </TouchableCustom>

                        <View style={styles.wrapTitle}>
                            <TextView textStyle={'14-700'} color={theme.gray07} mt={4}>
                                {getWeight(product.weight, edZim)}
                            </TextView>
                            {renderTags}
                        </View>
                        <ProductVariations productId={params.id} onPress={handleSelectVariation} />
                        <View style={styles.wrapDescription}>
                            {!!product.short_description && (
                                <TextView textStyle={'15-700'} color={theme.black02} mb={10}>
                                    {'Описание товара'}
                                </TextView>
                            )}
                            <HtmlView html={product.short_description.trim()} />
                            <Description storage={product.storage} sostav={product.sostav} />
                            <EnergyNutritional
                                cal={product.calories_amount}
                                prot={product.bel_amount}
                                fats={product.fats_amount}
                                carb={product.ugl_amount}
                            />
                        </View>
                    </View>
                    <RelatedProducts relatedIds={product.related} />
                </BottomSheetScrollView>
                {!params?.isHideAddBtn && <AmountControl product={product} />}
            </View>
        </ModalSheet>
    )
})
