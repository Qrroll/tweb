import { Menu } from "antd";
import { UserOutlined, AppstoreOutlined, LinkOutlined, SettingOutlined } from "@ant-design/icons";
import React, {useState} from "react";
import Sider from "antd/es/layout/Sider";


const SiderCustom = (props: any) => {

    //const [sideBarIsOpen, setSideBarOpen] = props

    console.log('>>collapse ', props.sideBarIsOpen)

    return (
        <Sider
            style={{
                // overflow: 'auto',
                // height: '100vh',
                // position: 'relative',
                // left: 0,
                // top: 64,
                // bottom: 0
            }}
            trigger={null}
            collapsible={true}
            collapsed={props.sideBarIsOpen}
            onCollapse={() => props.setSideBarOpen(!props.sideBarIsOpen)}
        >

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
export default SiderCustom