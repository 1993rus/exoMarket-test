import { useState, type FC } from 'react'
import type { IProductImage } from '../../../types'
import styles from './ProductPhotos.module.scss'

interface IProps {
    images: IProductImage[]
}

export const ProductPhotos: FC<IProps> = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0)

    if (!images.length) {
        return <div className={styles.placeholder} />
    }

    const handlePrev = () => {
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))
    }

    const handleNext = () => {
        setActiveIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.imageContainer} onClick={handleNext}>
                <img
                    src={images[activeIndex].big}
                    className={styles.image}
                    loading="lazy"
                    alt={`Фото товара ${activeIndex + 1}`}
                />
            </div>
            {images.length > 1 && (
                <>
                    <button
                        className={styles.arrowLeft}
                        onClick={handlePrev}
                        aria-label="Предыдущее фото"
                    >
                        &#8249;
                    </button>
                    <button
                        className={styles.arrowRight}
                        onClick={handleNext}
                        aria-label="Следующее фото"
                    >
                        &#8250;
                    </button>
                    <div className={styles.indicators}>
                        {images.map((_, index) => (
                            <div
                                key={index}
                                className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ''}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}