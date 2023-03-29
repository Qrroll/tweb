import React from "react";
import {Layout, theme} from "antd";
const { Content } = Layout;
const ContentCustom = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    // fetch('https://dummyjson.com/products')
    //     .then(res => res.json())
    //     .then(console.log);

    return (
        <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
                <div>Присакарь Сергей</div>
                <div>CR-203</div>

            </div>
        </Content>
    )
}
export default ContentCustom

