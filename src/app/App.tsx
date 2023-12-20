import React, {useEffect} from "react";
import {Button, ConfigProvider, Switch} from "antd";
import {AxiosInit} from "./core/AxiosInit";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {getAccessToken, isUserAuthenticated} from "./store/auth";
import viVN from 'antd/es/locale/vi_VN';
import moment from "moment";
import {BrowserRouter, Navigate, Route, useRoutes} from "react-router-dom";
import {Dashboard} from "./pages/admin/dashboard/dashboard";
import {Routes} from "./core/routes";

export const App = () => {
    const dispatch = useDispatch();
    const accessToken = useSelector(getAccessToken);

    const locale = moment.locale('vi');
    const isAuthenticated = useSelector(isUserAuthenticated)

    const {t} = useTranslation();


    useEffect(() => {
        // Impl code here
    }, []);


    return (
        <ConfigProvider locale={viVN}>
            <BrowserRouter basename="/app">
                <Route index={true} path='/' element={<Dashboard/>}/>
                <Routes/>
            </BrowserRouter>

            {/*Tìm hiểu react router dom v6 để config setting route chỗ này*/}

            {/*Loading*/}
            <AxiosInit/>
        </ConfigProvider>
    );


// #######################################################################

    function PrivateRoute(props: any) {
        const {component, ...rest} = props;

        return (
            <Route
                {...rest}
                render={(props: any) =>
                    isAuthenticated ? (
                        React.createElement(component, props)
                    ) : (
                        <Navigate
                            to={{
                                pathname: '/login'
                            }}
                            state={""}
                        />
                    )
                }
            />
        )
    }

    function PublicRoute(props: any) {
        const { component, ...rest } = props

        return (
            <Route
                {...rest}
                render={(props: any) =>
                    isAuthenticated ? (
                        <Navigate
                            to={{
                                pathname: '/',
                            }}
                        />
                    ) : (
                        React.createElement(component, props)
                    )
                }
            />
        )
    }
}
