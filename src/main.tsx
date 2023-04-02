import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { store, StoreContext } from './mst/stores/store.Root.Store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <StoreContext.Provider value={ store }>
        <App />
    </StoreContext.Provider>
);
