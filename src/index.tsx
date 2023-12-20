import React from 'react';
import reportWebVitals from './reportWebVitals';
import {App} from "./app/App";
import {Provider} from "react-redux";
import {store} from "./app/store";
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";
import {createRoot} from 'react-dom/client';

createRoot(document.getElementById('root')!)
    .render(
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistStore(store)}>
                <App/>
            </PersistGate>
        </Provider>
    )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
