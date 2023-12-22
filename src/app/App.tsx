import React from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/home/home";
import {Dashboard} from "./pages/admin/dashboard/dashboard";
import {Products} from "./pages/admin/product/products";
import {ProductDetail} from "./pages/admin/product/product-detail";
import {NotFound} from "./pages/not-found/not-found";
import {RequireAuth} from "./core/RequireAuth";
import {Login} from "./pages/admin/login/login";
import {PublicRoute} from "./core/PublicRoute";

export const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>

            <Route path={'admin'}>
                <Route element={<PublicRoute/>}>
                    <Route path={'/admin/login'} element={<Login/>}/>
                </Route>

                <Route element={<RequireAuth/>}>
                    <Route path={'app'} element={<Dashboard/>}/>
                    <Route path={'products'} element={<Products/>}>
                        <Route path={':id'} element={<ProductDetail/>}/>
                    </Route>
                </Route>
            </Route>
            <Route path={'*'} element={<NotFound/>}/>
        </Routes>
    )
}
