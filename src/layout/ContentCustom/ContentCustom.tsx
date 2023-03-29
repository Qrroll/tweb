import React from "react";
import {Button, Input, Layout, theme} from "antd";
import {LinkOutlined, UserOutlined} from "@ant-design/icons";
import {Simulate} from "react-dom/test-utils";
import change = Simulate.change;
const { Content } = Layout;
//import * from "./mobx/model/modelUsers"
const changeUser = () => {
    console.log('нажатие');
    /**
     * User.Update(name.current.value)
     */
};

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

                <Input name='surname' placeholder="Фамилия" prefix={<UserOutlined />} />
                <br />
                <br />
                <Input name='name' placeholder="Имя" prefix={<UserOutlined />} />
                <br />
                <br />
                <Input name='group' placeholder="Группа" prefix={<LinkOutlined />} />
                <br />
                <br />
                <Button onClick={changeUser} type="primary">Изменить</Button>
                <br />
                <br />
                <div>Присакарь Сергей</div>
                <div>CR-203</div>

            </div>
        </Content>
    )
}
export default ContentCustom

