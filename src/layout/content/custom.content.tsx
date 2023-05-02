import React from "react";
import { theme } from "antd";
import './content.css'
import { observer } from "mobx-react";
import { Content } from "antd/lib/layout/layout";

interface ContentCustomProps {
    breadcrumbChild: React.ReactNode;
    contentChild: React.ReactNode;
}

const ContentCustom: React.FC<ContentCustomProps> = observer(({ breadcrumbChild, contentChild }) => {

    const { token } = theme.useToken();

    return (
        <Content
            className="site-layout"
            style={{ padding: '0' }}
        >
            <div style={{ paddingLeft: '24px' }} >
                {breadcrumbChild}
            </div>


            <div
                style={{
                    padding: 24,
                    minHeight: '70vh',
                    background: token.colorBgContainer
                }}
            >
                {contentChild}
            </div>

        </Content>
    )
})
export default ContentCustom

