import {Button, Card, Checkbox, Collapse, Form, Input, theme} from "antd";
import {CaretRightOutlined} from "@ant-design/icons";
import React, {useEffect} from "react";
import {observer} from "mobx-react";
import {store} from "../../../../../mst/store/store.root";
import {useHistory} from "react-router-dom";
const { Panel } = Collapse;

const PageProfileSettingsContent: React.FC = observer(() => {

    const { token } = theme.useToken();

    const panelStyle = {
        marginBottom: 24,
        background: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: 'none',
    };
    const history = useHistory();

    const profileSettings = store.userProfile
    useEffect(() => {
        profileSettings.load()
    }, [])
    const onFinish = (values: any) => {
        console.log('New todo:', values);
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
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
               initialValues={{ profileSettings }}
           >
               <Form.Item
                   label="Имя" name="name"
                   rules={[{ required: true, message: 'Введите Имя!' }]}
                   initialValue={profileSettings.name}
               >
                   <Input value={profileSettings.name} onChange={ (e) => profileSettings.onChangeName(e.target.value)}/>
               </Form.Item>
               <Form.Item
                   label="Почта" name="email"
                   rules={[{ required: true, message: 'Введите почту!' }]}
                   initialValue={profileSettings.email}
               >
                   <Input value={profileSettings.email} onChange={(e) => profileSettings.onChangeEmail(e.target.value)}/>
               </Form.Item>
               <Form.Item
                   label="Аватар" name="avatar"
                   rules={[{ required: true, message: 'Введите ссылку на аватар!' }]}
                   initialValue={profileSettings.avatar}
               >
                   <Input value={profileSettings.avatar} onChange={(e) => profileSettings.onChangeAvatar(e.target.value)}/>
               </Form.Item>
               <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                   <Button type="primary" htmlType="submit" onClick={ () => {
                       profileSettings.save();
                       history.push('/profile');
                   } }>
                       Сохранить
                   </Button>
               </Form.Item>
           </Form>
       </div>
    )
})

export default PageProfileSettingsContent