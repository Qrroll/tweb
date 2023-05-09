import React, { useEffect } from 'react';
import { Layout, theme } from 'antd';
import {observer} from "mobx-react";
import {useRootStore} from "./mst/store/store.root";
import { Switch, Route } from 'react-router-dom';

import HeaderCustom from "./layout/header/header";
import FooterCustom from "./layout/footer/footer";

import pageLabs from "./layout/content/pages/labs/page.labs";
import pageHome from "./layout/content/pages/home/page.home";
import pageTodo from "./layout/content/pages/todo/page.todo";
import pageProfile from "./layout/content/pages/profile/page.profile";
import pageProfileSettings from "./layout/content/pages/profile/settings/page.profile.settings";

const App: React.FC = observer(() => {

    const store = useRootStore()

    useEffect(() => {
        store.fetchCarts()
    }, [])

    //const [sideBarIsOpen, setSideBarOpen] = useState(true);
    return (
        <Layout style={{ minHeight: '100vh', background: '#eee' }} >

            <HeaderCustom />

            <Switch>
                <Route exact path="/" component={pageHome} />
                <Route exact path="/labs" component={pageLabs} />
                <Route exact path="/todo" component={pageTodo} />
                <Route exact path="/profile" component={pageProfile} />
                <Route exact path="/profile/settings" component={pageProfileSettings} />
            </Switch>

            <FooterCustom />

        </Layout>
    )
})


export default App;