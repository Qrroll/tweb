import {Collapse, theme} from "antd";
import {CaretRightOutlined} from "@ant-design/icons";
import Lab_4 from "./lab/lab.4";
import Lab_3 from "./lab/lab.3";
import Lab_2 from "./lab/lab.2";
import React from "react";
import {observer} from "mobx-react";

const { Panel } = Collapse;

const PageLabsContent: React.FC = observer(() => {

    const { token } = theme.useToken();

    const panelStyle = {
        marginBottom: 24,
        background: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: 'none',
    };

    return (
            <Collapse
                bordered={false}
                defaultActiveKey={['3']}
                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                style={{ background: token.colorBgContainer }}

            >
                <Panel header="Лабораторная работа № 4" key="4" style={panelStyle}>
                    <Lab_4 />
                </Panel>
                <Panel header="Лабораторная работа № 3" key="3" style={panelStyle}>
                    <Lab_3 />
                </Panel>
                <Panel header="Лабораторная работа № 2" key="2" style={panelStyle}>
                    <Lab_2 />
                </Panel>
            </Collapse>
    )
})

export default PageLabsContent