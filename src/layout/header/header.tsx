import React from "react";
import { Layout, Menu } from "antd";
import { AppstoreOutlined, HomeOutlined, LinkOutlined, SettingOutlined } from "@ant-design/icons";
import './header.css'
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

const { Header } = Layout;
const HeaderCustom: React.FC = observer(  () => {

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

                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<HomeOutlined />}>
                        <Link to="/">Qrroll</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<AppstoreOutlined />}>
                        <Link to="/labs">Лабораторные</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<AppstoreOutlined />}>
                        <Link to="/todo">Todo</Link>
                    </Menu.Item>
                    <Menu.Item key="4" icon={<SettingOutlined />}>
                        <Link to="/settings">Настройки</Link>
                    </Menu.Item>
                    <Menu.Item key="5" icon={<LinkOutlined />}>
                        <Link to="/contacts">Контакты</Link>
                    </Menu.Item>
                </Menu>

            {/*<Menu*/}
            {/*    theme="dark"*/}
            {/*    mode="horizontal"*/}
            {/*    defaultSelectedKeys={['1']}*/}
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
})

export default HeaderCustom