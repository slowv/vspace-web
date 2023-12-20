import React, {useEffect} from "react";
import {ConfigProvider} from "antd";
import {AxiosInit} from "./core/AxiosInit";
import {useSelector} from "react-redux";
import {isUserAuthenticated} from "./store/auth";
import viVN from 'antd/es/locale/vi_VN';
import {BrowserRouter, Navigate, Route} from "react-router-dom";
import {Routes} from "./core/routes";

export const App = () => {
    // const dispatch = useDispatch();
    // const accessToken = useSelector(getAccessToken);
    //
    // const locale = moment.locale('vi');
    const isAuthenticated = useSelector(isUserAuthenticated)
    //
    // const {t} = useTranslation();


    useEffect(() => {
        // Impl code here
    }, []);


    return (
        <ConfigProvider locale={viVN}>
            <BrowserRouter>
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
