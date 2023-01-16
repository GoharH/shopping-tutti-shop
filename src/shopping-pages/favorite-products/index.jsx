import React from "react";
import './style.scss';
import ProductItem from '../../components/product-item';
import ProductDetales from '../product-detales'

const FavoriteProducts = () => {
    return <div className="favorite-products-page">
        <div className="G-container">
            <div className="favorite-page">
                <div className="G-page-title-sec">
                    <h2 className="G-page-title">My Favories</h2>
                </div>
                <div className="favorite-product-list">
                    <div className="G-padding-25">
                        <ProductItem />
                    </div>
                </div>
            </div>
            <ProductDetales />
        </div>
    </div>
}
export default FavoriteProducts