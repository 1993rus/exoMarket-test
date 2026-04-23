import React, { FC, Fragment, useCallback, useMemo } from 'react'
import { View } from 'react-native'

import { TextView } from '$app/components'
import { theme } from '$app/constants'

import { styles, sStyles } from './styles'

const DAILY = {
    PROT: 80,
    FATS: 60,
    CARB: 80,
}

interface IProps {
    cal: string
    prot: string
    fats: string
    carb: string
}

export const EnergyNutritional: FC<IProps> = ({ cal, prot, fats, carb }) => {
    const DATA = useMemo(() => {
        return [
            { title: 'Жиры', valueDay: DAILY.FATS, weight: fats },
            { title: 'Белки', valueDay: DAILY.PROT, weight: prot },
            { title: 'Углеводы', valueDay: DAILY.CARB, weight: carb },
        ]
    }, [fats, prot, carb])

    const renderData = useCallback(() => {
        return DATA.map((item, i, array) => {
            const numericValue = item.weight ? parseFloat(String(item.weight).replace(',', '.').split(' ')[0]) : 1
            const percent = Math.ceil((100 * numericValue) / item.valueDay)

            if (!item.weight) return

            return (
                <Fragment key={i}>
                    <View style={styles.wrapRow}>
                        <TextView ml={12} textStyle={'14-700'}>
                            {item.title}
                        </TextView>
                        <View style={styles.wrapValue}>
                            <TextView
                                textStyle={'14-700'}
                                style={styles.flex}
                                numberOfLines={1}>{`${item.weight} г`}</TextView>
                            <View style={styles.wrapPercent}>
                                {!!percent && (
                                    <TextView numberOfLines={1} textStyle={'14-700'}>{`${percent} %`}</TextView>
                                )}
                            </View>
                        </View>
                    </View>
                    {i < array.length - 1 && <View style={styles.decoration} />}
                </Fragment>
            )
        })
    }, [carb, prot, fats])

    if (!cal) return null

    return (
        <View style={sStyles.container}>
            <TextView ml={12} mr={12} textStyle={'20-900'} mt={2} mb={4}>
                {'Энергетическая\nи пищевая ценность'}
            </TextView>
            <View style={styles.decoration} />
            <View style={styles.wrapWeight}>
                <TextView ml={2} textStyle={'12-500'}>
                    {'на 100 г продукта'}
                </TextView>
            </View>
            <View style={styles.wrapCal}>
                <TextView textStyle={'15-700'} style={styles.cal}>
                    {'Калорийность'}
                </TextView>
                <TextView style={styles.cal2} textStyle={'15-900'} numberOfLines={1}>
                    {`${cal.split(' ')?.[0]} ккал`}
                </TextView>
            </View>
            <View style={styles.decoration2} />
            <View style={styles.containerDaily}>
                <View style={styles.empty} />
                <View style={styles.wrapDaily}>
                    <TextView ml={15} textStyle={'12-500'}>
                        {'Дневная норма %'}
                    </TextView>
                </View>
            </View>
            <View style={styles.decoration} />
            {renderData()}
            <View style={styles.decoration2} />
            <View style={styles.wrapText}>
                <TextView textStyle={'12-500'} color={theme.gray}>
                    {
                        'Процент от суточной нормы показывает, какое количество питательных веществ в порции продукта приходится на суточный рацион. Значения усреднены и основаны на данных общих рекомендательных норм.'
                    }
                </TextView>
            </View>
        </View>
    )
}
