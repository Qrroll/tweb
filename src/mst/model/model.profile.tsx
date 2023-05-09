import { types } from 'mobx-state-tree'
import LocalStorageService from "../local/local.service";

export const modelProfile = types
    .model("modelProfile", {
        name: '',
        email: '',
        avatar: '',
    })
    .actions((self) => ({
        onChangeAll(_name: string, _email: string, _avatar: string) {
            self.name = _name;
            self.email = _email;
            self.avatar = _avatar;
        },
        onChangeName(value: string) {
            self.name = value
        },
        onChangeEmail(value: string) {
            self.email = value
        },
        onChangeAvatar(value: string) {
            self.avatar = value
        },
        load() {
            const userData = LocalStorageService.getData('profile');
            if (userData) {
                this.onChangeAll(userData.name, userData.email, userData.avatar)
                // self.name = userData.name;
                // self.email = userData.email;
                // //self.username = userData.username;
                // //self.password = userData.password;
                // self.avatar = userData.avatar;
                return true;
            }
            return false;
        },
        save() {
            LocalStorageService.saveData('profile', self);
        },
        clear() {
            LocalStorageService.removeData('profile');
            self.name = '';
            self.email = '';
            //self.username = '';
            //self.password = '';
            self.avatar = '';
        },
    }))

//id: types.identifier,
//username: string,
//password: string,