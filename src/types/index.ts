export interface IProductImage {
    big: string
}

export interface ITag {
    key: string
    title: string
    background: string
}

export interface IProduct {
    id: string
    title: string
    url: string
    images: IProductImage[]
    weight: number | string
    ed_izm: string
    short_description: string
    storage: string
    sostav: string
    calories_amount: string
    bel_amount: string
    fats_amount: string
    ugl_amount: string
    related: string[]
    tags: ITag[]
    availableones: number
    price: number
}

export interface IRelatedProduct {
    id: string
    title: string
    image: string
    weight: string
    price: number 
}