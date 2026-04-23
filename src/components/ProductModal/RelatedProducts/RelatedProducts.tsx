import { useRef, type FC } from 'react'
import type { IRelatedProduct } from '../../../types'
import styles from './RelatedProducts.module.scss'

// Пропущено: загрузка товаров по ID из store. Причина: store отсутствует, данные передаются через пропсы.
// Пропущено: аналитика. Причина: сервис аналитики отсутствует.
// Пропущено: ProductCard из приложения. Причина: компонент недоступен, карточка реализована inline.

interface IProps {
    products: IRelatedProduct[]
}

export const RelatedProducts: FC<IProps> = ({ products }) => {
    const listRef = useRef<HTMLDivElement>(null)

    if (!products.length) return null

    const scroll = (direction: number) => {
        if (!listRef.current) return
        listRef.current.scrollBy({ left: direction * 150, behavior: 'smooth' })
    }

    return (
        <div className={styles.container}>
            <h3 className={styles.heading}>С этим товаром берут</h3>
            <div className={styles.listWrapper}>
                <button
                    className={styles.arrowLeft}
                    onClick={() => scroll(-1)}
                    aria-label="Назад"
                >
                    &#8249;
                </button>
                <div ref={listRef} className={styles.list}>
                    {products.map((product) => (
                        <div key={product.id} className={styles.card}>
                            <img
                                src={product.image}
                                className={styles.cardImage}
                                loading="lazy"
                                alt={product.title}
                            />
                            <span className={styles.cardTitle}>{product.title}</span>
                            <span className={styles.cardWeight}>{product.weight}</span>
                            <span className={styles.cardPrice}>{`${product.price} р`}</span>
                        </div>
                    ))}
                </div>
                <button
                    className={styles.arrowRight}
                    onClick={() => scroll(1)}
                    aria-label="Вперёд"
                >
                    &#8250;
                </button>
            </div>
        </div>
    )
}