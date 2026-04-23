import { useEffect, type FC } from 'react'
import { createPortal } from 'react-dom'
import type { IProduct, IRelatedProduct } from '../../types'
import { getWeight } from '../../constants'
import { ProductPhotos } from './ProductPhotos'
import { Description } from './Description'
import { EnergyNutritional } from './EnergyNutritional'
import { RelatedProducts } from './RelatedProducts'
import styles from './ProductModal.module.scss'

// Пропущено: ProductVariations. Причина: компонент отсутствует в исходниках и на скриншоте.
// Пропущено: like/share обработчики. Причина: API и сервис шаринга отсутствуют.

interface IProps {
    product: IProduct
    isOpen: boolean
    onClose: () => void
    relatedProducts: IRelatedProduct[]
}

export const ProductModal: FC<IProps> = ({ product, isOpen, onClose, relatedProducts }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('modalOpen')
        }
        return () => {
            document.body.classList.remove('modalOpen')
        }
    }, [isOpen])

    useEffect(() => {
        if (!isOpen) return
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }
        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [isOpen, onClose])

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) onClose()
    }

    if (!isOpen) return null

    return createPortal(
        <div className={styles.overlay} onClick={handleOverlayClick}>
            <div
                className={styles.modal}
                role='dialog'
                aria-modal='true'
                aria-labelledby='product-modal-title'
            >
                <button
                    className={styles.closeButton} onClick={onClose} aria-label='Закрыть'
                >
                    &times;
                </button>
                <div className={styles.scrollContent}>
                    <ProductPhotos images={product.images} />

                    <div className={styles.content}>
                        <h2 id='product-modal-title' className={styles.title}>
                            {product.title?.trim()}
                        </h2>

                        <div className={styles.wrapTitle}>
                            <span className={styles.weight}> 
                                {getWeight(product.weight, product.ed_izm)}
                            </span>
                            <div className={styles.tags}>
                                {product.tags.map((tag) => (
                                    <span
                                        key={tag.key}
                                        className={styles.tag}
                                        style={{backgroundColor: tag.background}}
                                    >
                                        {tag.title}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className={styles.descriptionBlock}>
                            {!!product.short_description && (
                                <>
                                    <h3 className={styles.sectionHeading}>Описание товара</h3>
                                    <p className={styles.shortDescription}>
                                        {product.short_description.trim()}
                                    </p>
                                </>
                            )}
                            <Description storage={product.storage} sostav={product.sostav} />
                            <EnergyNutritional
                                cal={product.calories_amount}
                                prot={product.bel_amount}
                                fats={product.fats_amount}
                                carb={product.ugl_amount}
                            />
                        </div>
                    </div>

                    <RelatedProducts products={relatedProducts} />
                </div>

                <div className={styles.bottomBar}>
                    <div className={styles.priceBlock}>
                        <span className={styles.price}>
                            {product.price.toLocaleString('ru-RU')}
                        </span>
                        <span className={styles.priceUnit}>за 1 шт</span>
                    </div>
                    <button className={styles.addToCart}>В корзину</button>
                </div>
            </div>
        </div>,
        document.body
    )
}