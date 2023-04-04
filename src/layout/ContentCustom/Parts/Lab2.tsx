import React from "react";
import {User} from "../../../mst/models/model.User";

const Lab2 = () => {

    const myData = User.create({
        surname: "Присакарь",
        name: "Сергей",
        group: "CR-203"
    });
    return (
        <div>
            <p>Просто выводятся данные из модели </p>
            <p><b>Имя:</b> {myData.name}, <b>Фамилия:</b> {myData.surname}, <b>Группа:</b> {myData.group}</p>
        </div>
    )
}
export default Lab2