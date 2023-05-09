import {Button, Card, Checkbox, Collapse, Form, Input, theme} from "antd";
import {CaretRightOutlined} from "@ant-design/icons";
import React from "react";
import {observer} from "mobx-react";
import {store} from "../../../../mst/store/store.root";
import {ITodoModel} from "../../../../mst/interface";
const { Panel } = Collapse;

const PageTodoContent: React.FC = observer(() => {

    const { token } = theme.useToken();

    const panelStyle = {
        marginBottom: 24,
        background: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: 'none',
    };

    const todoViewModel = store.new_todo

    const onFinish = (values: any) => {
        console.log('New todo:', values);
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    const handleInputChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        //console.log("Название todo: ", event.target.value)
        todoViewModel.onChangeTitle(event.target.value);
    };
    console.log('Todos:', store.todos);
    return (
        <Collapse
            bordered={false}
            defaultActiveKey={['2']}
            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
            style={{ background: token.colorBgContainer }}
        >
            <Panel header="Добавить todo" key="1" style={panelStyle}>
                <div>
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
                            label="Название" name="title"
                            rules={[{ required: true, message: 'Введите название!' }]}
                            initialValue={todoViewModel.title}
                        >
                            <Input value={todoViewModel.title} onChange={handleInputChangeTitle}/>
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit" onClick={ () => store.addTodo()}>
                                Add todo
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Panel>
            <Panel header="Todos" key="2" style={panelStyle}>
                <div >
                    <Card title="Новые" bordered={false} style={{ marginBottom: 20 }}>
                        { store.getTodoNew().map((item: ITodoModel, index) => {
                            return (
                                <Card type="inner" style={{ width: 300, margin: 10 }} key={index}>
                                    <div className={ 'items-center space-x-2 border p-2' }>
                                        <span onClick={ item.setModelAsReference }>{ item.title }</span>
                                        <Checkbox defaultChecked={ item.status }
                                                  onClick={ () => item.onChangeStatus(!item.status) }/>
                                    </div>
                                </Card>
                            )
                        })}
                    </Card>
                    <Card title="Выполненые" bordered={false} >
                        { store.getTodoDone().map((item: ITodoModel, index) => {
                            return (
                                <Card type="inner" style={{ width: 300, margin: 10 }} key={index}>
                                    <div className={ 'items-center space-x-2 border p-2' }>
                                        <span onClick={ item.setModelAsReference }>{ item.title }</span>
                                        <Checkbox defaultChecked={ item.status }
                                                  onClick={ () => item.onChangeStatus(!item.status) }/>
                                    </div>
                                </Card>
                            )
                        })}
                    </Card>
                </div>
            </Panel>
        </Collapse>
    )
})

export default PageTodoContent