import { applySnapshot, flow, toGenerator, types } from 'mobx-state-tree'

import { createContext, useContext } from 'react'
import { IRootStore } from '../interfaces'
import app from '../../App'
import { Cart } from '../models/model.Cart'
import {User} from "../models/model.User";


export const RootStore = types
    .model('RootStore', {
        controlUser : types.optional(User, {name: "Сергей",surname: "Присакарь",group: "CR-203"}),
        carts: types.array(Cart),
        title: types.optional(types.string, "Qrroll")
    })
    .actions((self) => ({
        fetchCarts: flow(function * () {
            const srl = 'https://dummyjson.com/carts'
            const res = yield * toGenerator(fetch(srl).then(res => res.json()))
            applySnapshot(self.carts, res.carts)
        }),
        setTitle(temp: string) {
            self.title = temp
        }
    }))

export const store = RootStore.create({})
export const StoreContext = createContext<IRootStore>(store)
export const useRootStore = () => useContext(StoreContext)



