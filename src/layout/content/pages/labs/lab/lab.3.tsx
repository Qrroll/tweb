import React from "react";
import {store} from "../../../../../mst/store/store.root";
import {Button, Collapse, Form, Input, theme} from "antd";
import {observer} from "mobx-react";
import {CaretRightOutlined} from "@ant-design/icons";

const { Panel } = Collapse;

const Lab_3 = observer(() => {

    const { token } = theme.useToken();
    const panelStyle = {
        marginBottom: 24,
        background: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: 'none',
    };
    const handleInputChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Имя: ", event.target.value)
        store.controlUser.setName(event.target.value); // обновляем значение свойства в модели
    };
    const handleInputChangeSurname = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Фамилия: ", event.target.value)
        store.controlUser.setSurname(event.target.value);
    };
    const handleInputChangeGroup = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Группа: ", event.target.value)
        store.controlUser.setGroup(event.target.value);
    };
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const rand = Math.floor(Math.random() * 20) + 1;
    const dummyLines = () => {
        const cartsCount = store.carts.length
        console.log("carts: ", cartsCount, " | cart current: ", rand)
        if (cartsCount > 1) {
            return (
                <div>
                    {
                        store.carts[rand].products.map((item, index) => {
                            return (
                                <li key={item.id}>{item.title}</li>
                            );
                        })
                    }
                </div>
            )
        } else {
            return (
                <div>Ошибка</div>
            );
        }
    }
    return (
        <div style={{
            marginLeft: '25px',
            marginRight: '25px',
        }}>
            <Collapse
                bordered={false}
                defaultActiveKey={['2']}
                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                //style={{ background: token.colorBgContainer }}

            >
                <Panel header="Контролируемая форма" key="2" style={panelStyle}>
                    <div>
                        <div style={{marginLeft: '50px'}}>
                            <p>
                                <b>Имя:</b> {store.controlUser.name}
                                <br/>
                                <b>Фамилия:</b> {store.controlUser.surname}
                                <br/>
                                <b>Группа:</b> {store.controlUser.group}
                            </p>
                            <Form
                                name="basic"
                                labelCol={{ span: 8 }}
                                wrapperCol={{ span: 16 }}
                                style={{ maxWidth: 600 }}
                                //initialValues={{ remember: true }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="on"
                                initialValues={{ store }}
                            >
                                <Form.Item
                                    label="Имя" name="name"
                                    rules={[{ required: true, message: 'Введите Имя!' }]}
                                    initialValue={store.controlUser.name}
                                >
                                    <Input value={store.controlUser.name} onChange={handleInputChangeName}/>
                                </Form.Item>
                                <Form.Item
                                    label="Фамилия" name="surname"
                                    rules={[{ required: true, message: 'Введите Фамилию!' }]}
                                    initialValue={store.controlUser.surname}
                                >
                                    <Input value={store.controlUser.surname} onChange={handleInputChangeSurname}/>
                                </Form.Item>
                                <Form.Item
                                    label="Группа" name="group"
                                    rules={[{ required: true, message: 'Введите группу!' }]}
                                    initialValue={store.controlUser.group}
                                >
                                    <Input value={store.controlUser.group} onChange={handleInputChangeGroup}/>
                                </Form.Item>
                                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                    <Button type="primary" htmlType="submit">
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </Panel>
                <Panel header="Dummy Cart" key="1" style={panelStyle}>
                    <div>
                        <p>В store.carts снапшот этих данных https://dummyjson.com/carts</p>
                        <p>При каждом вызове observed рандомно генерируется число (от 1 до 20), выводится products из carts[число]  </p>
                    </div>
                    <ul>{dummyLines()}</ul>
                </Panel>
            </Collapse>
        </div>
    )
})
export default Lab_3