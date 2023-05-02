import {HomeOutlined, UserOutlined} from "@ant-design/icons";
import React from "react";
import {Breadcrumb} from "antd";
import {Link} from "react-router-dom";

const PageLabsBreadcrumb = () => {

    return (
        <Breadcrumb
            style={{
                margin: '16px 0'
            }}
            items={[
                {
                    title: (
                        <>
                            <HomeOutlined />
                            <Link to="/"><span>Home</span></Link>
                        </>
                    ),
                },
                {
                    title: (
                        <>
                            <UserOutlined />
                            <span>Лабораторные работы</span>
                        </>
                    ),
                }
            ]}
        />
    )
}
export default PageLabsBreadcrumb