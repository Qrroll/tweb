import {HomeOutlined, UserOutlined} from "@ant-design/icons";
import React from "react";
import {Breadcrumb, Layout} from "antd";
//
// const { Breadcrumb } = Layout;

const BreadcrumbCustom = () => {


    return (
        <Breadcrumb
            style={{
                margin: '16px 0'
            }}
            items={[
                {
                    //href: '',
                    title: (
                        <>
                            <HomeOutlined />
                            <span>Home</span>
                        </>
                    ),
                },
                {
                    //href: '/labs',
                    title: (
                        <>
                            <UserOutlined />
                            <span>Лабораторные работы</span>
                        </>
                    ),
                },
                // {
                //     //href: '/profile',
                //     title: (
                //         <>
                //             <UserOutlined />
                //             <span>Профиль</span>
                //         </>
                //     ),
                // },
                // {
                //     title: (
                //         <>
                //             <SettingOutlined />
                //             <span>Настройки</span>
                //         </>
                //     ),
                // }
            ]}
        />
    )
}
export default BreadcrumbCustom