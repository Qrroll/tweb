import React from "react";
import {observer} from "mobx-react";
import ContentCustom from "../../custom.content";
import PageLoginContent from "./page.login.content";
import {PageLoginBreadcrumb} from "./page.login.breadcrumb";


const pageProfileSettings: React.FC = observer(() => {

    return (
        <div>
            <ContentCustom
                breadcrumbChild={<PageLoginBreadcrumb/>}
                contentChild={<PageLoginContent/>}
            />
        </div>
    )
})
export default pageProfileSettings

