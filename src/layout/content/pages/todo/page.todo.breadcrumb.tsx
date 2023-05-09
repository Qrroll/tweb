import { CheckOutlined, HomeOutlined } from "@ant-design/icons";
import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

const PageTodoBreadcrumb = () => {

    return (
        <Breadcrumb
            style={{ margin: '16px 0' }}
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
                            <CheckOutlined />
                            <span>Todo</span>
                        </>
                    ),
                }
            ]}
        />
    )
}
export default PageTodoBreadcrumb