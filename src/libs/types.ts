export type TProduct = {
    id: number
    category: string
    title: string
    price: number
    description?: string
    cover: {
        name: string
        url: string
    }
}
