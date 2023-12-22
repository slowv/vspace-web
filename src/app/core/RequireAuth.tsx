import {Navigate, Outlet, Route, useLocation} from "react-router-dom";
import React from "react";
import {useSelector} from "react-redux";
import {isUserAuthenticated} from "../store/auth";
import {MasterLayout} from "../common/component/layout/MasterLayout";

export const RequireAuth = () => {
    const location = useLocation();
    const isAuthenticated = useSelector(isUserAuthenticated)

    return (
        isAuthenticated ?
            <MasterLayout/> :
            <Navigate
                to={{
                    pathname: '/admin/login'
                }}
                state={{
                    from: location
                }}
                replace
            />
    )
}
