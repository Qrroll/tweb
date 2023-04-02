import React from "react";
import {Breadcrumb, Button, Form, Input, Layout, Menu, Switch, theme} from "antd";
import {HomeOutlined, SettingOutlined, UserOutlined} from "@ant-design/icons";
import './ContentCustom.css'
import {User} from "../../mst/models/model.User";

const { Content } = Layout;
const changeUser = () => {
    console.log('нажатие');
    /**
     * User.Update(name.current.value)
     */
};
const myData = User.create({
    id: '',
    surname: "Присакарь",
    name: "Сергей",
    group: "CR-203"
})

const ContentCustom = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

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
                <Breadcrumb
                    style={{
                        margin: '16px 0'
                    }}
                    items={[
                        {
                            href: '',
                            title: (
                                <>
                                    <HomeOutlined />
                                    <span>Home</span>
                                </>
                            ),
                        },
                        {
                            href: '/profile',
                            title: (
                                <>
                                    <UserOutlined />
                                    <span>Профиль</span>
                                </>
                            ),
                        },
                        {
                            title: (
                                <>
                                    <SettingOutlined />
                                    <span>Настройки</span>
                                </>
                            ),
                        }
                    ]}
                />

            </div>
            <div
                style={{
                    padding: 24,
                    minHeight: '70vh',
                    background: colorBgContainer
                }}
            >

                <h1> Лаб 3 </h1>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Имя" name="name"
                        rules={[{ required: true, message: 'Введите Имя!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Фамилия" name="surname"
                        rules={[{ required: true, message: 'Введите Фамилию!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Группа" name="group"
                        rules={[{ required: true, message: 'Введите группу!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>



                <div>
                    <h1> Лаб 2 </h1>
                    <p>
                        <b>Имя:</b> {myData.name}, <b>Фамилия:</b> {myData.surname}, <b>Группа:</b> {myData.group}</p>
                </div>
            </div>
        </Content>
    )
}
export default ContentCustom

