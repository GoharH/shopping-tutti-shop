import React from "react";
import './style.scss';
import { NavLink } from "react-router-dom";


const NavBarBlock = () => {
    return <div className="G-navbar-block">
        <div className="G-flex">
            <div className="nav-list">
                <ul>
                    <li>
                        <NavLink to={'/category-admin'}>Category</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/products-admin'}>Products</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/users-in-admin'}>Users</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
}
export default NavBarBlock