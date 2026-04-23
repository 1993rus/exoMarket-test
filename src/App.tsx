import { useState, type FC } from 'react'
import { ProductModal } from './components/ProductModal'
import { mockProduct, mockRelatedProducts } from './mocks/product'

export const App: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
            <button
                onClick={() => setIsModalOpen(true)}
                style={{
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#ffffff',
                    backgroundColor: '#4caf50',
                    border: 'none',
                    borderRadius: '24px',
                    padding: '14px 32px',
                    cursor: 'pointer',
                }}
            >
                Открыть товар
            </button>
            <ProductModal
                product={mockProduct}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                relatedProducts={mockRelatedProducts}
            />
        </div>
    )
}