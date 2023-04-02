import React, {useEffect, useState} from 'react';
import { Layout, theme } from 'antd';
import HeaderCustom from "./layout/HeaderCustom/HeaderCustom";
import FooterCustom from "./layout/FooterCustom/FooterCustom";
import ContentCustom from "./layout/ContentCustom/ContentCustom";
import {observer} from "mobx-react";
import {useRootStore} from "./mst/stores/store.Root.Store";


const App: React.FC = observer(() => {

    const {
        token: { colorBgContainer },
    } = theme.useToken();


    const store = useRootStore()

    useEffect(() => {
        store.fetchCarts()
    }, [])

    //const [sideBarIsOpen, setSideBarOpen] = useState(true);

    return (
        <Layout
            style={{
                minHeight: '100vh'
            }}
        >

            <HeaderCustom />

            <ContentCustom dataCarts={store.carts} />

            <FooterCustom />

        </Layout>
    )
})


export default App;