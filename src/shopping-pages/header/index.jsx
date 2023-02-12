import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import CustomInput from "../../components/custom-input";
import './style.scss';

const Header = () => {
    const [category, setCategory] = useState([])

    const [searchText, setSearchText] = useState({
        search: ''
    })
    const handleChange = (e) => {
        setSearchText(e.target.name = e.target.value)
    }
    const handleSearchClick = () => {

    }
    const getCategoryList = async () => {
        //setIsLoading(true)
        const result = await axios.get('https://crudcrud.com/api/b76e3217f8604a86b57ef256676003df/categoryList')
        if (result.data) {
            setCategory(result.data)
            // setIsLoading(false)
        }
    }
    useEffect(() => {
        getCategoryList()
    }, [])

    return <>
        <div>
            <div className="G-container">
                <div className="header-top G-flex" >
                    <NavLink to={"/home"}>
                        <div className="header-logo G-flex">
                            <span className="tutti">TUTTI</span>
                            <span className="shop">SHOP</span>
                        </div>
                    </NavLink>
                    <div className="header-search">
                        <div className="G-flex">
                            <CustomInput
                                name={'search'}
                                className='header-input'
                                value={searchText.search}
                                placeholder="Search"
                                onChange={handleChange}
                                type={"search"} />
                            {/* <label>
                                <input type="search" value='Search' onChange={handleChange} name="header-input" className="header-input" />
                            </label> */}
                            <button onClick={handleSearchClick} className=" header-search-icon icon-search_black_24dp "></button>
                        </div>
                    </div>
                    <div className="header-contact">
                        <p>Customer Service</p>
                        <p>+012 345 6789</p>
                    </div>
                    <Link to="/log-in">
                        <button className="login-btn">Log In</button>
                    </Link>
                </div>
            </div>
        </div>
        <div className="header-bottom">
            <div className="G-container">
                <div className="G-flex">
                    <select name="" id="" className="header-categories">
                        {/* <option value="">Categories</option>
                        <option value="">Woman</option>
                        <option value="">Man</option>
                        <option value="">Kids</option> */}
                        {category.length ? category.map((item, index) => {
                            return <option key={index} value="">{item.catName}</option>
                        }) : null}
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
                                            <span className="header-icon icon-heart"></span>
                                            <p className="header-icon-num">0</p>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/shop"}>
                                        <div className="G-flex">
                                            <span className="header-icon icon-cart"></span>
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