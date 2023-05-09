import React from "react";
import {observer} from "mobx-react";

const PageHomeContent: React.FC = observer(() => {
    const valueInLocalStorage = localStorage.getItem("key");
    console.log('kek:', valueInLocalStorage);
    return (
        <div>HOme</div>
    )
})

export default PageHomeContent