import React from "react";
import {observer} from "mobx-react";
import PageLabsBreadcrumb from "./page.labs.breadcrumb";
import ContentCustom from "../../custom.content";
import PageLabsContent from "./page.labs.content";


const pageLabs: React.FC = observer(() => {

    return (
        <div>
            <ContentCustom
                breadcrumbChild={<PageLabsBreadcrumb/>}
                contentChild={<PageLabsContent/>}
            />
        </div>
    )
})
export default pageLabs

