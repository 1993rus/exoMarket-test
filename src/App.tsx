import { type FC } from 'react'
import { Description } from './components/ProductModal/Description'
import { EnergyNutritional } from './components/ProductModal/EnergyNutritional'
import { ProductPhotos } from './components/ProductModal/ProductPhotos'
import { mockProduct } from './mocks/product'

export const App: FC = () => {
    return (
        <div style={{ maxWidth: 400, margin: '20px auto' }}>
            <ProductPhotos images={mockProduct.images} />

            <Description
                storage={mockProduct.storage}
                sostav={mockProduct.sostav}
            />

            <EnergyNutritional
                cal={mockProduct.calories_amount}
                prot={mockProduct.bel_amount}
                fats={mockProduct.fats_amount}
                carb={mockProduct.ugl_amount}
            />
        </div>
    )
}