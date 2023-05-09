import { types } from 'mobx-state-tree'

export const modelUser = types
    .model("modelUser", {
        name: '',
        group: '',
        surname: '',
    })
    .actions((self) => ({
        // setAll(newName: string, newSurname: string, newGroup: string ) {
        //     self.name = newName,
        //     self.surname = newSurname,
        //     self.group = newGroup
        // },
        setName(temp: string){
            self.name = temp
        },
        setSurname(temp: string){
            self.surname = temp
        },
        setGroup(temp: string){
            self.group = temp
        }
    }))
