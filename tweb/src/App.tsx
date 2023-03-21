import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import SideBarCustom from "./layout/SideBarCustom/SideBarCustom";
import HeaderCustom from "./layout/HeaderCustom/HeaderCustom";
import FooterCustom from "./layout/FooterCustom/FooterCustom";
import ContentCustom from "./layout/ContentCustom/ContentCustom";


const App: React.FC = () => {

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const [sideBarIsOpen, setSideBarOpen] = useState(true);

    return (
        <Layout>

            <SideBarCustom sideBarIsOpen={sideBarIsOpen} setSideBarOpen={setSideBarOpen}/>

            <Layout className="site-layout">

                <HeaderCustom sideBarIsOpen={sideBarIsOpen} setSideBarOpen={setSideBarOpen}/>

                <ContentCustom />

                <FooterCustom />

            </Layout>

        </Layout>
    );
};

export default App;