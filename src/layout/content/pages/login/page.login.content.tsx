import {Button, Card, Checkbox, Collapse, Form, Input, theme} from "antd";
import {CaretRightOutlined} from "@ant-design/icons";
import React, {useEffect, useState} from "react";
import {observer} from "mobx-react";
import {store} from "../../../../mst/store/store.root";
import {useHistory} from "react-router-dom";
import {modelLogin} from "../../../../mst/model/model.login";
import {modelLoginUsers} from "../../../../mst/model/model.login.users";
const { Panel } = Collapse;

const PageLoginContent: React.FC = observer(() => {

    const initialUsers = modelLoginUsers.create({loginUsers: [{id:0,username: "skrip", password: "1234"},{id:1,username: "lol", password: "kek"},{id:2,username: "null", password: "555"} ]})
    useEffect(() => {
        if(!initialUsers.exist()) {
            initialUsers.save()
        }
    }, [])
    const users =  modelLoginUsers.create()

    const loginState = modelLogin.create({id:0})

    const goLogin = () => {
        if (users.load()) {
            console.log("loginState.username: ", loginState.username)
            console.log("loginState.password: ", loginState.password)
            let kek = false;
            users.loginUsers.map((item, index) => {
                if (item.username === loginState.username && item.password === loginState.password ) {
                    kek = true;
                }
            });
            if (kek) {
                console.log("user exist")
            } else {
                console.log("user not exist")
            }
        }
    };

    return (
       <div>
           <Form
               name="basic"
               labelCol={{ span: 8 }}
               wrapperCol={{ span: 16 }}
               style={{ maxWidth: 600 }}
               //initialValues={{ remember: true }}
               autoComplete="on"
               initialValues={{ loginState }}
           >
               <Form.Item
                   label="Имя пользователя" name="username"
                   rules={[{ required: true, message: 'Введите имя пользователя!' }]}
                   //initialValue={loginState.username}
               >
                   <Input //value={loginState.username}
                          onChange={ (e) => loginState.onChangeUsername(e.target.value)}/>
               </Form.Item>
               <Form.Item
                   label="Пароль" name="password"
                   rules={[{ required: true, message: 'Введите пароль!' }]}
                   //initialValue={loginState.password}
               >
                   <Input //value={loginState.password}
                            onChange={(e) => loginState.onChangePassword(e.target.value)}/>
               </Form.Item>
               <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                   <Button type="primary" htmlType="submit" onClick={ () => goLogin()}>
                       Проверить
                   </Button>
               </Form.Item>
           </Form>
       </div>
    )
})

export default PageLoginContent