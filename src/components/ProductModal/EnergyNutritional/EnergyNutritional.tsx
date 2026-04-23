import { type FC, Fragment } from 'react'
import styles from './EnergyNutritional.module.scss'

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
    if (!cal) return null

    const data = [
        { title: 'Жиры', valueDay: DAILY.FATS, weight: fats },
        { title: 'Белки', valueDay: DAILY.PROT, weight: prot },
        { title: 'Углеводы', valueDay: DAILY.CARB, weight: carb },
    ]

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>
                {'Энергетическая\nи пищевая ценность'}
            </h3>
            <div className={styles.decoration} />
            <div className={styles.wrapWeight}>
                <span className={styles.weightLabel}>на 100 г продукта</span>
            </div>
            <div className={styles.wrapCal}>
                <span className={styles.cal}>Калорийность</span>
                <span className={styles.calValue}>{`${cal.split(' ')?.[0]} ккал`}</span>
            </div>
            <div className={styles.decorationBold} />
            <div className={styles.containerDaily}>
                <div className={styles.empty} />
                <div className={styles.wrapDaily}>
                    <span className={styles.dailyLabel}>Дневная норма %</span>
                </div>
            </div>
            <div className={styles.decoration} />
            {data.map((item, i, array) => {
                if (!item.weight) return null

                const numericValue = parseFloat(
                    String(item.weight).replace(',', '.').split(' ')[0]
                ) || 1
                const percent = Math.ceil((100 * numericValue) / item.valueDay)

                return (
                    <Fragment key={item.title}>
                        <div className={styles.wrapRow}>
                            <span className={styles.rowTitle}>{item.title}</span>
                            <div className={styles.wrapValue}>
                                <span className={styles.weightText}>{`${item.weight} г`}</span>
                                <div className={styles.wrapPercent}>
                                    {!!percent && (
                                        <span className={styles.percentText}>{`${percent} %`}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                        {i < array.length - 1 && <div className={styles.decoration} />}
                    </Fragment>
                )
            })}
            <div className={styles.decorationBold} />
            <p className={styles.disclaimer}>
                Процент от суточной нормы показывает, какое количество питательных веществ в порции продукта приходится на суточный рацион. Значения усреднены и основаны на данных общих рекомендательных норм.
            </p>
        </div>
    )
}
