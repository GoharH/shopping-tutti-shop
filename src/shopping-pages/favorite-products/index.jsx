import React, { useEffect } from "react";
import './style.scss';
import ProductItem from '../../components/product-item';
import ProductDetales from '../product-detales';
import product1 from "../../assets/images/product-1.jpg"
import { useState } from "react";
import axios from "axios";

const FavoriteProducts = () => {
    const [product, setProduct] = useState([])
    const getProductList = async () => {
        const result = await axios.get('https://crudcrud.com/api/b76e3217f8604a86b57ef256676003df/productList')
        if (result.data) {
            setProduct(result.data)
        }
    }

    useEffect(() => {
        getProductList()
    }, [])
    return <div className="favorite-products-page">
        <div className="G-container">
            <div className="favorite-page">
                <div className="G-page-title-sec">
                    <h2 className="G-page-title">My Favories</h2>
                </div>
                <div className="favorite-product-list">
                    <div className="G-padding-25">
                        {/* <ProductItem
                            productImg={product1}
                            productName='Product Name'
                            productPrice='$123.00' /> */}
                        {product.length ? product.map((item, index) => {
                            return <ProductItem
                                item={item}
                                key={index}
                                productImg={item.image}
                                productName={item.prodName}
                                productPrice={item.price} />
                        }) : <span className="loading">Loading....</span>}
                    </div>
                </div>
            </div>
            {/* <ProductDetales /> */}
        </div>
    </div>
}
export default FavoriteProducts