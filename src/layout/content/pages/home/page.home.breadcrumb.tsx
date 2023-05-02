import React from "react";
import {HomeOutlined} from "@ant-design/icons";
import {Breadcrumb} from "antd";

const PageHomeBreadcrumb = () => {

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
                            <span>Home</span>
                        </>
                    ),
                }
            ]}
        />
    )
}
export default PageHomeBreadcrumb