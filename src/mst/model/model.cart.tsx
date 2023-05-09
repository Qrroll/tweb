import {types} from "mobx-state-tree";
import {modelProduct} from "./model.product";

export const modelCart = types.model('modelCart', {
    id: types.identifierNumber,
    products: types.array(modelProduct),
    total: 0,
    totalProducts: 0,
    totalQuantity: 0,
    userId: 0,
    discountedTotal: 0
})