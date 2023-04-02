import {types} from "mobx-state-tree";
import {Product} from "./model.Product";

export const Cart = types.model('Cart', {
    id: types.identifierNumber,
    products: types.array(Product)
})