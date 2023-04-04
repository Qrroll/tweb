import React from "react";
import {Layout, theme} from "antd";
import './ContentCustom.css'
import {observer} from "mobx-react";
import Lab2 from "./Parts/Lab2";
import Lab3 from "./Parts/Lab3";
import BreadcrumbCustom from "./Parts/BreadcrumbCustom";

const { Content } = Layout;

const ContentCustom: React.FC = observer(() => {

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    // console.log('carts[', rand, ']: ', store.carts[rand])
    // console.log('carts: ', store.carts)
    return (
        <Content
            className="site-layout"
            style={{
                padding: '0'
            }}
        >
            <div
                style={{
                    paddingLeft: '24px'
                }}
            >
                <BreadcrumbCustom />
            </div>
            <div
                style={{
                    padding: 24,
                    minHeight: '70vh',
                    background: colorBgContainer
                }}
            >
                <div>{Lab3()}</div>

                <div>{Lab2()}</div>
            </div>
        </Content>
    )
})
export default ContentCustom

