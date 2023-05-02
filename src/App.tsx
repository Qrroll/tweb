import React, { useEffect } from 'react';
import { Layout, theme } from 'antd';
import {observer} from "mobx-react";
import {useRootStore} from "./mst/store/root";
import { Switch, Route } from 'react-router-dom';
import HeaderCustom from "./layout/header/header";
import FooterCustom from "./layout/footer/footer";
import pageLabs from "./layout/content/pages/labs/page.labs";
import pageHome from "./layout/content/pages/home/page.home";

const App: React.FC = observer(() => {



    const store = useRootStore()

    useEffect(() => {
        store.fetchCarts()
    }, [])

    //const [sideBarIsOpen, setSideBarOpen] = useState(true);
    return (
        <Layout style={{ minHeight: '100vh' }} >

            <HeaderCustom />

            <Switch>
                <Route exact path="/" component={pageHome} />
                <Route exact path="/labs" component={pageLabs} />
            </Switch>

            <FooterCustom />

        </Layout>
    )
})


export default App;