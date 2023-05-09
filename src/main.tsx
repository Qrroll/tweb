import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { store, StoreContext } from './mst/store/store.root'
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Router>
        <StoreContext.Provider value={ store }>
            <App />
        </StoreContext.Provider>
    </Router>

);
