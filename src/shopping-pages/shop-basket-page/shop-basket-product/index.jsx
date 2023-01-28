import React from "react";
import './style.scss';

const ShopProduct = ({ product, productName, productPrice, productTotalPrice }) => {

    return <ul className="G-flex shop-table-line" >

        <li className="G-flex">
            <span className="shop-prod-img" style={{ backgroundImage: `url(${product})` }}></span>
            <p>{productName}</p>
        </li>
        <li>
            <p>${productPrice}</p>
        </li>
        <li className="G-flex">
            <p className="shop-product-number bg-color">-</p>
            <p className="shop-product-number">1</p>
            <p className="shop-product-number bg-color">+</p>
        </li>
        <li>
            <p>${productTotalPrice}</p>
        </li>
        <li>
            <button className="prod-delete">x</button>
        </li>
    </ul>
}
export default ShopProduct