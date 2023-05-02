import { types } from "mobx-state-tree"
import {User} from "./user"


export const Users = types
    .model("Users", {
    users: types.array(User)
    })
    .actions((self) => ({
        update(){

        }
    }))