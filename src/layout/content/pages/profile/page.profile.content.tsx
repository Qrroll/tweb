import {Button, Card, Image, Checkbox, Collapse, Form, Input, theme} from "antd";
import {CaretRightOutlined, HomeOutlined, SettingOutlined} from "@ant-design/icons";
import React, {useEffect, useState} from "react";
import {observer} from "mobx-react";
import {store, storeRoot} from "../../../../mst/store/store.root";
import {modelProfile} from "../../../../mst/model/model.profile";
import {Link} from "react-router-dom";
const { Panel } = Collapse;

const PageProfileContent: React.FC = observer(() => {

    const [loading, setLoading] = useState(true);

    const userProfile = store.userProfile
    useEffect(() => {
        setTimeout(() => {
            if (!userProfile.load()) {
                userProfile.onChangeAll("Skrip", "dainsureivu@gmail.com", "https://downloader.disk.yandex.ru/preview/025fd39b70b0b5fbf09126ee756d1a3078e2e84ff11a401c7f819c572a170ce0/645ac1a2/UHyX3SC38i03tcHZeugg21z_eJChgy3DCFQN_oU75ejvigZUaib7GlO3EfcZV7f4AW5DfYs7BzG_BrHN83ZHSg%3D%3D?uid=0&filename=2023-01-06%2022-05-47.JPG&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048")
                userProfile.save()
            }
            setLoading(false);
        }, 2000);

    }, [])

    return (
        <Card title="Профиль" bordered={false} style={{  }}
              actions={[
                  <Link to="/profile/settings"><SettingOutlined /></Link>// <span>settings</span>
              ]}
              loading={loading}
        >
            <Image
                width={200}
                src={userProfile.avatar}
                preview={false}
            />
            <p>{userProfile.name}</p>
            <p>{userProfile.email}</p>
        </Card>
    )
})

export default PageProfileContent