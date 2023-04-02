import { types, onSnapshot } from "mobx-state-tree"
import {User} from "./model.User"


export const Users = types
    .model("Users", {
    users: types.array(User)
    })
    .actions((self) => ({
        update(){

        }
    }))