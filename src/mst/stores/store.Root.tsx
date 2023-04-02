import { applySnapshot, flow, toGenerator, types } from 'mobx-state-tree'

import { createContext, useContext } from 'react'
//import { IRootStore, ITodoModel, ITodoModelSnapshotIn } from '../interfaces'
import app from '../../App'
import { Product } from '../models/model.Product'


export const RootStore = types
    .model('RootStore', {

    products: types.array(Product),

    })
    .actions((self) => ({
        fetchProducts: flow(function * () {
        // const res =  yield fetch('https://dummyjson.com/products').then(res => res.json()).then((obj) => setProducts(obj.products))
        const res = yield * toGenerator(fetch('https://dummyjson.com/products').then(res => res.json()))


        applySnapshot(self.products, res.products)

        console.log('>>self.products', self.products)
    }),

} ))

export const store = RootStore.create({})

export const StoreContext = createContext<IRootStore>(store)
export const useRootStore = () => useContext(StoreContext)



