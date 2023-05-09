import { types } from 'mobx-state-tree'
import LocalStorageService from "../local/local.service";

export const modelLogin = types
    .model("modelLogin", {
        id: types.identifierNumber,
        username: '',
        password: ''
    })
    .actions((self) => ({
        onChangeUsername(value: string) {
            self.username = value
        },
        onChangePassword(value: string) {
            self.password = value
        }
    }))