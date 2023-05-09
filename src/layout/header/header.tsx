import React from "react";
import {Image, Layout, Menu} from "antd";
import { AppstoreOutlined, HomeOutlined, LinkOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
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
                    height: 64,
                    margin: '0 24px 0 0',
                    background: 'rgba(255, 255, 255, 0.2)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Image
                    style={{ width: 120,
                        height: 64,}}
                    src='https://downloader.disk.yandex.ru/preview/ac3e6c3dc74f38258e007c2d2205474915af4ca080855be0c3edc1bb587b07d6/645ae634/UwI43ycFOUsblUmQkE0Ue4ffjGYIl4IzTm4L9zg7SUDV3NJS6oz-H2dFFQvvKGPUHPh8Kn1yD_holLD_SGRF9g%3D%3D?uid=0&filename=2022-11-04%2009-57-08.JPG&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048'
                    preview={false}
                />
            </div>

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
                    <Menu.Item key="4" icon={<UserOutlined />}>
                        <Link to="/profile">Профиль</Link>
                    </Menu.Item>
                    <Menu.Item key="5" icon={<SettingOutlined />}>
                        <Link to="/login">Авторизация</Link>
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