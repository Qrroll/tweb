import { applySnapshot, flow, toGenerator, types } from 'mobx-state-tree'
import { createContext, useContext } from 'react'
import { IRootStore } from '../interface'
import { modelCart } from '../model/model.cart'
import {modelUser} from "../model/model.user";
import {modelTodos} from "../model/model.todos";

export const storeRoot = types.compose(
    modelTodos,
    types.model('storeRoot', {
        controlUser : types.optional(modelUser, {name: "Сергей",surname: "Присакарь",group: "CR-203"}),
        carts: types.array(modelCart),
        title: types.optional(types.string, "Qrroll"),
    })
    ).actions((self) => ({
        fetchCarts: flow(function * () {
            const srl = 'https://dummyjson.com/carts'
            const res = yield * toGenerator(fetch(srl).then(res => res.json()))
            applySnapshot(self.carts, res.carts)
        }),
        setTitle(temp: string) {
            self.title = temp
        }
    }))

export const store = storeRoot.create()
export const StoreContext = createContext<IRootStore>(store)
export const useRootStore = () => useContext(StoreContext)



