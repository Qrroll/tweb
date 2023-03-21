import {Layout, Menu} from "antd";
import {UploadOutlined, UserOutlined, VideoCameraOutlined} from "@ant-design/icons";
import React, {useState} from "react";
const { Sider } = Layout;
export const SideBarCustom = (props: any) => {

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
                        icon: <VideoCameraOutlined />,
                        label: 'nav 2',
                    },
                    {
                        key: '3',
                        icon: <UploadOutlined />,
                        label: 'nav 3',
                    },
                ]}
            />
        </Sider>
        )
}