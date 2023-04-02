import { types } from 'mobx-state-tree'


export const Product = types.model('ProductModel', {
    id: types.identifierNumber,
    title: '',
    price: 0,
    quantity: 0,
    total: 0,
    discountPercentage: 0,
    discountedPrice: 0,
    category: '',
    thumbnail: '',
    images: types.array(types.string)
})
