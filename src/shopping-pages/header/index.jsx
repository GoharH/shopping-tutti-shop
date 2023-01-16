import React from "react";
import { NavLink, Link } from "react-router-dom";
import './style.scss';

const Header = () => {

    return <>
        <div>
            <div className="G-container">
                <div className="header-top G-flex" >
                    <div className="header-logo G-flex">
                        <span className="tutti">TUTTI</span>
                        <span className="shop">SHOP</span>
                    </div>
                    <div className="header-search">
                        <div className="G-flex">
                            <label>
                                <input type="search" name="header-input" className="header-input" />
                            </label>
                            <button className=" header-search-icon icon-search_black_24dp "></button>
                        </div>
                    </div>
                    <div className="header-contact">
                        <p>Customer Service</p>
                        <p>+012 345 6789</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="header-bottom">
            <div className="G-container">
                <div className="G-flex">
                    <select name="" id="" className="header-categories">
                        <option value="">Categories</option>
                        <option value="">Woman</option>
                        <option value="">Man</option>
                        <option value="">Kids</option>
                    </select>
                    <div className="header-nav-left G-justify-between">
                        <ul className="navlist">
                            <li>
                                <NavLink to={"/home"}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/contact"}>Contact</NavLink>
                            </li>
                        </ul>
                        <div className="header-icons">
                            <ul className="navlist">
                                <li>
                                    <Link to={"/favorite"}>
                                        <div className="G-flex">
                                            <span class="header-icon icon-heart"></span>
                                            <p className="header-icon-num">0</p>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/shop"}>
                                        <div className="G-flex">
                                            <span class="header-icon icon-cart"></span>
                                            <p className="header-icon-num">0</p>
                                        </div>
                                    </Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default Header