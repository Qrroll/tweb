import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import {SideBarCustom} from "./layout/SideBarCustom/SideBarCustom";

const { Header, Content } = Layout;

const App: React.FC = () => {
    const [sideBarIsOpen, setSideBarOpen] = useState(true);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout>
            <SideBarCustom sideBarIsOpen={sideBarIsOpen} setSideBarOpen={setSideBarOpen}/>

            <Layout className="site-layout">
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    {React.createElement(sideBarIsOpen ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setSideBarOpen(!sideBarIsOpen),
                    })}
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    Content
                </Content>
            </Layout>
        </Layout>
    );
};

export default App;