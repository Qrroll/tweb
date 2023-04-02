import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import HeaderCustom from "./layout/HeaderCustom/HeaderCustom";
import FooterCustom from "./layout/FooterCustom/FooterCustom";
import ContentCustom from "./layout/ContentCustom/ContentCustom";


const App: React.FC = () => {

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    //const [sideBarIsOpen, setSideBarOpen] = useState(true);

    return (
        <Layout
            style={{
                minHeight: '100vh'
            }}
        >

            <HeaderCustom />

            <ContentCustom />

            <FooterCustom />

        </Layout>
    );
};

export default App;