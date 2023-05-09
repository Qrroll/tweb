import React from "react";
import {observer} from "mobx-react";
import PageTodoBreadcrumb from "./page.todo.breadcrumb";
import ContentCustom from "../../custom.content";
import PageTodoContent from "./page.todo.content";


const pageTodo: React.FC = observer(() => {

    return (
        <div>
            <ContentCustom
                breadcrumbChild={<PageTodoBreadcrumb/>}
                contentChild={<PageTodoContent/>}
            />
        </div>
    )
})
export default pageTodo

