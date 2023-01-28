import React from "react";
import { Route, Routes } from 'react-router-dom';
import './style.scss';
import CategoryInAdmin from './category-in-admin';
import ProductInAdmin from './product-in-admin';
import NavBarBlock from "./components/nav-bar-in-admin";

const AdminPage = () => {

    return <div>
        <div className="admin-container G-flex">
            <NavBarBlock />
            <div className="admin-routes">
                <Routes>
                    <Route path={"/category-admin"} element={<CategoryInAdmin title={'Category'} btnTitle='category' />} />
                    <Route path={"/products-admin"} element={<ProductInAdmin title={'Products'} btnTitle='product' />} />
                    {/* <Route path={"/admin-user"} element={} /> */}

                    <Route path='*' element={<CategoryInAdmin />} />
                </Routes>

            </div>
        </div>
    </div>
}
export default AdminPage