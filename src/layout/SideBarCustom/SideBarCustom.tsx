import {Layout, Menu} from "antd";
import {UploadOutlined, UserOutlined, AppstoreOutlined, LinkOutlined, SettingOutlined } from "@ant-design/icons";
import React, {useState} from "react";
const { Sider } = Layout;
const SideBarCustom = (props: any) => {

    //const [sideBarIsOpen, setSideBarOpen] = props

    console.log('>>collapse ', props.sideBarIsOpen)

    return (
        <Sider trigger={null} collapsible={true} collapsed={props.sideBarIsOpen} onCollapse={() => props.setSideBarOpen(!props.sideBarIsOpen)}>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="inline"
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
        </Sider>
        )
}
export default SideBarCustom