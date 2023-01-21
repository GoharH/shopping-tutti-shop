import React from "react";
import './style.scss';
import StarRate from '../../components/star-rating';



const ProductItem = ({ productImg, productName, productPrice }) => {

    return <div className="product-box">
        <div className="hidden-cover">
            <div className="product-image" style={{ backgroundImage: `url(${productImg})` }}>
                <div className="cover-none">
                    <div className="img-cover">
                        <span class="prod-icon icon-cart G-center"></span>
                        <span class="prod-icon icon-heart G-center"></span>
                    </div>
                </div>
            </div>
        </div>
        <div className="product-info">
            <h3>{productName}</h3>
            <p>{productPrice}</p>
            <div>
                <StarRate />
            </div>
        </div>
    </div>
}
export default ProductItem
