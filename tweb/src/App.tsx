import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import {SideBarCustom} from "./layout/SideBarCustom/SideBarCustom";
import {HeaderCustom} from "./layout/HeaderCustom/HeaderCustom";
import {FooterCustom} from "./layout/FooterCustom/FooterCustom";

const { Content } = Layout;

const App: React.FC = () => {

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const [sideBarIsOpen, setSideBarOpen] = useState(true);

    return (
        <Layout>

            <SideBarCustom sideBarIsOpen={sideBarIsOpen} setSideBarOpen={setSideBarOpen}/>

            <Layout className="site-layout">

                <HeaderCustom sideBarIsOpen={sideBarIsOpen} setSideBarOpen={setSideBarOpen}/>

                <Content style={{ margin: '24px 16px 0' }}>
                    <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>content</div>
                </Content>

                <FooterCustom />

            </Layout>

        </Layout>
    );
};

export default App;