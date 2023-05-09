import React from "react";
import {observer} from "mobx-react";
import ContentCustom from "../../custom.content";
import PageHomeBreadcrumb from "./page.home.breadcrumb";
import PageHomeContent from "./page.home.content";


const pageHome: React.FC = observer(() => {

    return (
        <div>
            <ContentCustom
                breadcrumbChild={<PageHomeBreadcrumb/>}
                contentChild={<PageHomeContent/>}
            />
        </div>
    )
})
export default pageHome

