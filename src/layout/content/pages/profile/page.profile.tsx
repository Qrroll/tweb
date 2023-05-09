import React from "react";
import {observer} from "mobx-react";
import PageProfileBreadcrumb from "./page.profile.breadcrumb";
import ContentCustom from "../../custom.content";
import PageProfileContent from "./page.profile.content";


const pageProfile: React.FC = observer(() => {

    return (
        <div>
            <ContentCustom
                breadcrumbChild={<PageProfileBreadcrumb/>}
                contentChild={<PageProfileContent/>}
            />
        </div>
    )
})
export default pageProfile

