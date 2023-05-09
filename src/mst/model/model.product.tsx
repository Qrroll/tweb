import { types } from 'mobx-state-tree'


export const modelProduct = types.model('modelProduct', {
    id: types.identifierNumber,
    title: '',
    price: 0,
    quantity: 0,
    total: 0,
    discountPercentage: 0.0,
    discountedPrice: 0,
})
