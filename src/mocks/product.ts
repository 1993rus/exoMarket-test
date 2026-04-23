import type { IProduct, IRelatedProduct } from '../types'

export const mockProduct: IProduct = {
  id: '1',
  title: 'Натуральные свежие апельсины самолётом из Армении',
  url: 'naturalnyie-svezhie-apelsinyi-samolyotom-iz-armenii',
  images: [
    { big: 'https://placehold.co/400x400/e8f5e9/333?text=1' },
    { big: 'https://placehold.co/400x400/e3f2fd/333?text=2' },
    { big: 'https://placehold.co/400x400/fff3e0/333?text=3' },
  ],
  weight: 500,
  ed_izm: 'г',
  short_description:
    'Самолетом из Армении. Инжир (смоковница, фига, винная ягода) относится к семейству толстянковых. Плод обладает тонкой кожурой, представляет собой мелкую семянку, располагающуюся внутри мясистого цветоложа грушевидной формы, весит 20-75 г.',
  storage: 'Хранить при температуре от +2 до +6 градусов. Срок годности 14 суток.',
  sostav: 'Апельсины свежие',
  calories_amount: '47 ккал',
  bel_amount: '0,9 г',
  fats_amount: '0,2 г',
  ugl_amount: '11,8 г',
  related: ['2', '3', '4', '5'],
  tags: [
    { key: 'sugar_free', title: 'Без сахара', background: '#e8f5e9' },
    { key: 'lactose_free', title: 'Без лактозы', background: '#e8f5e9' },
    { key: 'halal', title: 'Халяль', background: '#e8f5e9' },
    { key: 'frozen', title: 'Заморозка', background: '#e3f2fd' },
  ],
  availableones: 10,
  price: 21000,
}

export const mockRelatedProducts: IRelatedProduct[] = [
  { id: '2', title: 'Молоко органическое 3.2%', image: 'https://placehold.co/150x150/e8f5e9/333?text=Milk', weight: '1 л', price: 4500 },
  { id: '3', title: 'Хлеб бездрожжевой цельнозерновой', image: 'https://placehold.co/150x150/fff3e0/333?text=Bread', weight: '300 г', price: 3200 },
  { id: '4', title: 'Масло оливковое Extra Virgin', image: 'https://placehold.co/150x150/e3f2fd/333?text=Oil', weight: '500 мл', price: 12000 },
  { id: '5', title: 'Мёд горный натуральный', image: 'https://placehold.co/150x150/fff3e0/333?text=Honey', weight: '250 г', price: 8500 },
]