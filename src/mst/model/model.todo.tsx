import {cast, getParentOfType, types} from 'mobx-state-tree'
import {storeRoot} from "../store/store.root";

export const modelTodo = types.model('modelTodo', {
    id: types.identifier,
    title: '',
    status: false,
    description: '',
})
    .actions((self) => ({
        onChangeTitle(value: string) {
            self.title = value
        },
        onChangeStatus(value: boolean) {
            self.status = value
        },
        setModelAsReference() {
            getParentOfType(self, storeRoot).setEditTodo(cast(self))
        }
    }))

//export const todo = modelTodo.create({ id: ''})
