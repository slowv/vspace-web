import {useRoutes} from "react-router-dom";
import {Dashboard} from "../pages/admin/dashboard/dashboard";
import {Home} from "../pages/home/home";
import {NotFound} from "../pages/not-found/not-found";
import {Products} from "../pages/admin/product/products";
import {ProductDetail} from "../pages/admin/product/product-detail";

export const Routes = () => {
    return useRoutes([
        {path: '/', element: <Home/>},
        {
            path: 'admin',
            children: [
                {
                    path: 'app',
                    element: <Dashboard/>,
                    index: true
                },
                {
                    path: 'products',
                    element: <Products/>,
                    children: [
                        {
                            path: ':id',
                            element: <ProductDetail/>
                        }
                    ]
                }
            ]
        },


        // Not found routes work as you'd expect
        { path: "*", element: <NotFound /> },
    ])
}