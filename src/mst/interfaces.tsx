import { Instance, SnapshotIn, SnapshotOut } from 'mobx-state-tree'
import { RootStore } from './stores/store.Root.Store'

export interface IRootStore extends Instance<typeof RootStore> {}
export interface IRootStoreSnapshotIn extends SnapshotIn<typeof RootStore> {}
export interface IRootStoreSnapshotOut extends SnapshotOut<typeof RootStore> {}