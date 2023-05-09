import {applySnapshot, types} from 'mobx-state-tree'
import LocalStorageService from "../local/local.service";
import {modelLogin} from "./model.login";

export const modelLoginUsers = types
    .model("modelLogin", {
        loginUsers: types.array(modelLogin)
    })
    .actions((self) => ({
        save() {
            LocalStorageService.saveData('users', self.loginUsers);
        },
        load() {
            const userData = LocalStorageService.getData('users');
            if (userData) {
                applySnapshot(self.loginUsers, userData)
                return true;
            }
            return false;
        },
        exist() {
            const userData = LocalStorageService.getData('users');
            return !!userData;
        },
    }))