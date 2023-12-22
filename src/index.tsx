import React from 'react';
import reportWebVitals from './reportWebVitals';
import {App} from "./app/App";
import {Provider} from "react-redux";
import {store} from "./app/store";
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";
import {createRoot} from 'react-dom/client';
import 'antd/dist/reset.css';
import './styles/common.scss'
import {ConfigProvider} from "antd";
import viVN from "antd/es/locale/vi_VN";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MasterLayout} from "./app/common/component/layout/MasterLayout";
import {AxiosInit} from "./app/core/AxiosInit";

createRoot(document.getElementById('root')!)
    .render(
        <React.StrictMode>
            <ConfigProvider
                locale={viVN}
                theme={{
                    cssVar: true,
                    token: {
                        colorBgContainer: '#fff',
                        colorPrimary: '#00b96b',
                    }
                }}
            >
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistStore(store)}>
                        <BrowserRouter>
                            <Routes>
                                <Route path={'/*'} element={<App/>}/>
                            </Routes>
                        </BrowserRouter>
                    </PersistGate>
                </Provider>

                {/*Tìm hiểu react router dom v6 để config setting route chỗ này*/}

                {/*Loading*/}
                <AxiosInit/>
            </ConfigProvider>
        </React.StrictMode>

    )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
