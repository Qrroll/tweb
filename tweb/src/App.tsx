import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, theme } from 'antd';
import {SideBarCustom} from "./layout/SideBarCustom/SideBarCustom";
import {HeaderCustom} from "./layout/HeaderCustom/HeaderCustom";
import {Footer} from "antd/lib/layout/layout";

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

                <Footer style={{ textAlign: 'center' }}>Kek Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};

export default App;