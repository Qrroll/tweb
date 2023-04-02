import {Layout, Menu, theme} from "antd";
import React from "react";
import {
    AppstoreOutlined,
    LinkOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    SettingOutlined,
    UserOutlined
} from "@ant-design/icons";

import './HeaderCustom.css'

const { Header } = Layout;
const HeaderCustom = () => {

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
            <div
                style={{
                    float: 'left',
                    width: 120,
                    height: 31,
                    margin: '16px 24px 16px 0',
                    background: 'rgba(255, 255, 255, 0.2)',
                }}
            />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                items={[
                    {
                        key: '1',
                        icon: <UserOutlined />,
                        label: 'Qrroll',
                    },
                    {
                        key: '2',
                        icon: <AppstoreOutlined  />,
                        label: 'Опции',
                    },

                    {
                        key: '3',
                        icon: <SettingOutlined />,
                        label: 'Настройки',
                    },
                    {
                        key: '4',
                        icon: <LinkOutlined  />,
                        label: 'Контакты',
                    },
                ]}
            />

            {/*<Menu*/}
            {/*    theme="dark"*/}
            {/*    mode="horizontal"*/}
            {/*    defaultSelectedKeys={['2']}*/}
            {/*    items={[*/}
            {/*        {*/}
            {/*            key: '1',*/}
            {/*            icon: <UserOutlined />,*/}
            {/*            label: 'Qrroll',*/}
            {/*        },*/}
            {/*        {*/}
            {/*            key: '2',*/}
            {/*            icon: <AppstoreOutlined  />,*/}
            {/*            label: 'Опции',*/}
            {/*            */}
            {/*        },*/}

            {/*        {*/}
            {/*            key: '3',*/}
            {/*            icon: <SettingOutlined />,*/}
            {/*            label: 'Настройки',*/}
            {/*        },*/}
            {/*        {*/}
            {/*            key: '4',*/}
            {/*            icon: <LinkOutlined  />,*/}
            {/*            label: 'Контакты',*/}
            {/*        },*/}
            {/*    ]}*/}
            {/*/>*/}
        </Header>
    )
}

export default HeaderCustom