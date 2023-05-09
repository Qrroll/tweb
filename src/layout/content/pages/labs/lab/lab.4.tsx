import React from "react";
import {store} from "../../../../../mst/store/store.root";
import {observer} from "mobx-react";
import { Form, Input } from "antd";
import {autorun} from "mobx";

const Lab_4 = observer(() => {

    autorun(() => {
        document.title = store.title;
    });
    const handleInputChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Название: ", event.target.value)
        store.setTitle(event.target.value);
    };

    return (
        <div>
            <p>К этому моменту как я понял я должен был просто добавить еще поле в модель Root.Store</p>
            <p>Привязал input к title</p>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                autoComplete="on"
                initialValues={{ store }}
            >
                <Form.Item
                    label="Название сайта" name="nameTitle"
                    rules={[{ required: true, message: 'Введите название!' }]}
                    initialValue={store.title}
                >
                    <Input value={store.title} onChange={handleInputChangeTitle}/>
                </Form.Item>
            </Form>
        </div>
    )

})
export default Lab_4