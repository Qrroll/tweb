import {Layout, theme} from "antd";
import React from "react";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";

const { Header } = Layout;
export const HeaderCustom = ({sideBarIsOpen, setSideBarOpen}: {sideBarIsOpen: any, setSideBarOpen: (param:boolean) => any }) => {
//
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Header style={{ padding: 0, background: colorBgContainer }}>
            {React.createElement(sideBarIsOpen ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: () => setSideBarOpen(!sideBarIsOpen),
            })}
        </Header>
    )
}