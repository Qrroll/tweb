import React from "react";
import {observer} from "mobx-react";
import PageProfileSettingsBreadcrumb from "./page.profile.settings.breadcrumb";
import PageProfileSettingsContent from "./page.profile.settings.content";
import ContentCustom from "../../../custom.content";


const pageProfileSettings: React.FC = observer(() => {

    return (
        <div>
            <ContentCustom
                breadcrumbChild={<PageProfileSettingsBreadcrumb/>}
                contentChild={<PageProfileSettingsContent/>}
            />
        </div>
    )
})
export default pageProfileSettings

