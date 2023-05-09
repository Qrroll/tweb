import React from "react";
import {modelUser} from "../../../../../mst/model/model.user";

const Lab_2 = () => {

    const myData = modelUser.create({
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
export default Lab_2