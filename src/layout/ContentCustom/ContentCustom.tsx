import React from "react";

import {Collapse, Layout, theme} from "antd";
import { CaretRightOutlined } from '@ant-design/icons';

import './ContentCustom.css'
import {observer} from "mobx-react";
import Lab2 from "./Parts/Lab2";
import Lab3 from "./Parts/Lab3";
import BreadcrumbCustom from "./Parts/BreadcrumbCustom";
import Lab4 from "./Parts/Lab4";

const { Content } = Layout;
const { Panel } = Collapse;

const ContentCustom: React.FC = observer(() => {

    const { token } = theme.useToken();

    const panelStyle = {
        marginBottom: 24,
        background: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: 'none',
    };

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
                    background: token.colorBgContainer
                }}
            >
                <Collapse
                    bordered={false}
                    defaultActiveKey={['3']}
                    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                    style={{ background: token.colorBgContainer }}

                >
                    <Panel header="Лабораторная работа № 4" key="4" style={panelStyle}>
                        <Lab4 />
                    </Panel>
                    <Panel header="Лабораторная работа № 3" key="3" style={panelStyle}>
                        <Lab3 />
                    </Panel>
                    <Panel header="Лабораторная работа № 2" key="2" style={panelStyle}>
                        <Lab2 />
                    </Panel>
                </Collapse>
            </div>
        </Content>
    )
})
export default ContentCustom

