import {applySnapshot, types} from 'mobx-state-tree'
import {modelTodo} from "./model.todo";
import { IRootStore, ITodoModel, ITodoModelSnapshotIn } from '../interface'

export const modelTodos = types
    .model('modelTodos', {
        todos: types.array(modelTodo),
        new_todo: types.optional(modelTodo, { id: '' }),
        edit_todo: types.safeReference(modelTodo),
    })
    .actions((self) => ({
        addTodo() {
            self.todos.push({
                ...self.new_todo,
                id: Math.random().toString(36).substr(2, 9),
            })
            applySnapshot(self.new_todo, { id: '' })
        },
        setEditTodo(todo: ITodoModel) {
            // self.edit_todo = todo
            self.edit_todo = todo

            // applySnapshot(self.edit_todo, todo)
        },

    })).views((self) => ( {

        getTodoDone() {
            return self.todos.filter((todo) => todo.status)
        },
        getTodoNew() {
            return self.todos.filter((todo) => !todo.status)
        },

    } ))

