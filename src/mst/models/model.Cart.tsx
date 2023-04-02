import {types} from "mobx-state-tree";
import {Product} from "./model.Product";

export const Cart = types.model('Cart', {
    id: types.identifierNumber,
    products: types.array(Product),
    total: 0,
    totalProducts: 0,
    totalQuantity: 0,
    userId: 0,
    discountedTotal: 0
})