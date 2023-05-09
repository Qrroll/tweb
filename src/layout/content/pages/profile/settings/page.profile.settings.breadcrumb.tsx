import { HomeOutlined, UserOutlined, SettingOutlined } from "@ant-design/icons";
import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

const PageProfileSettingsBreadcrumb = () => {

    return (
        <Breadcrumb
            style={{ margin: '16px 0' }}
            items={[
                {
                    title: (<> <Link to="/"><HomeOutlined /> <span>Home</span></Link> </> ),
                },
                {
                    title: ( <><Link to="/profile"><UserOutlined /> <span>Profile</span></Link></> ),
                },
                {
                    title: (
                        <>
                            <SettingOutlined />
                            <span>Settings</span>
                        </>
                    ),
                }
            ]}
        />
    )
}
export default PageProfileSettingsBreadcrumb