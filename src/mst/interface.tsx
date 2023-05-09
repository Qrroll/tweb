import { Instance, SnapshotIn, SnapshotOut } from 'mobx-state-tree'
import { storeRoot } from './store/store.root'
import { modelTodo } from "./model/model.todo";

export interface IRootStore extends Instance<typeof storeRoot> {}
export interface IRootStoreSnapshotIn extends SnapshotIn<typeof storeRoot> {}
export interface IRootStoreSnapshotOut extends SnapshotOut<typeof storeRoot> {}

export interface ITodoModel extends Instance<typeof modelTodo> {}
export interface ITodoModelSnapshotIn extends SnapshotIn<typeof modelTodo> {}
export interface ITodoModelSnapshotOut extends SnapshotOut<typeof modelTodo> {}