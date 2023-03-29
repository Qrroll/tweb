import { types, onSnapshot } from "mobx-state-tree"


const User = types
    .model("User", {
        name: types.string,
        group: types.string,
        surname: types.string
    })
    .actions(self => {
        return ({
            Update({newName, newSurname, newGroup}: { newName: string, newSurname: string, newGroup: string }) {
                self.name = newName,
                    self.surname = newSurname,
                    self.group = newGroup
            }
        });
    })

const Users = types.model("Users", {
    users: types.array(User)
})

const UserData = User.create({
    surname: "Присакарь",
    name: "Сергей",
    group: "CR-203"
})

const UsersData = Users.create({
    users: [
        {
            surname: "Присакарь",
            name: "Сергей",
            group: "CR-203"
        }
    ]
})

onSnapshot(UsersData, (snapshot) => {
    console.log(snapshot)
})