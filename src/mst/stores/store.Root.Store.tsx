import { applySnapshot, flow, toGenerator, types } from 'mobx-state-tree'

import { createContext, useContext } from 'react'
import { IRootStore } from '../interfaces'
import app from '../../App'
import { Cart } from '../models/model.Cart'


export const RootStore = types
    .model('RootStore', {

    carts: types.array(Cart),

    })
    .actions((self) => ({
        fetchCarts: flow(function * () {
            //const rand = Math.floor(Math.random() * 21) + 1;
            const srl = 'https://dummyjson.com/carts' //+ rand.toString()
            const res = yield * toGenerator(fetch(srl).then(res => res.json()))
            console.log('>>res', res)
        applySnapshot(self.carts, res.carts)

        console.log('>>self.carts', self.carts)
    }),

} ))

export const store = RootStore.create({})

export const StoreContext = createContext<IRootStore>(store)
export const useRootStore = () => useContext(StoreContext)



