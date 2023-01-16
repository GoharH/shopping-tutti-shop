import React from "react";
import './style.scss';
import StarRate from '../../components/star-rating';
import product1 from '../../assets/images/product-1.jpg';


const ProductItem = () => {

    return <div className="product-box">
        <div className="hidden-cover">
            <div className="product-image" style={{ backgroundImage: `url(${product1})` }}>
                <div className="cover-none">
                    <div className="img-cover">
                        <span class="prod-icon icon-cart G-center"></span>
                        <span class="prod-icon icon-heart G-center"></span>
                    </div>
                </div>
            </div>
        </div>
        <div className="product-info">
            <h3>Product Name</h3>
            <p>$123.00</p>
            <div>
                <StarRate />
            </div>
        </div>
    </div>
}
export default ProductItem
