import { useState, type FC } from 'react'
import { ProductModal } from './components/ProductModal'
import { mockProduct, mockRelatedProducts } from './mocks/product'

export const App: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <div>
            <button onClick={() => setIsModalOpen(true)}>Открыть товар</button>
            <ProductModal
                product={mockProduct}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                relatedProducts={mockRelatedProducts}
            />
        </div>
    )
}