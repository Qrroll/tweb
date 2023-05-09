import { AppstoreOutlined, HomeOutlined } from "@ant-design/icons";
import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

const PageLabsBreadcrumb = () => {

    return (
        <Breadcrumb
            style={{ margin: '16px 0' }}
            items={[
                {
                    title: (
                        <>
                            <Link to="/"><HomeOutlined /> <span>Home</span></Link>
                        </>
                    ),
                },
                {
                    title: (
                        <>
                            <AppstoreOutlined />
                            <span>Лабораторные</span>
                        </>
                    ),
                }
            ]}
        />
    )
}
export default PageLabsBreadcrumb