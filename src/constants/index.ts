export const BASE_DOMAIN = 'https://ecomarket.ru'

export const getWeight = (weight: number | string, edIzm: string): string => {
  return `${weight} ${edIzm}`
}