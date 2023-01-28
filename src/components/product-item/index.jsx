import React from "react";
import './style.scss';
import StarRate from '../../components/star-rating';
import { Link } from "react-router-dom";


const ProductItem = ({ productImg, productName, productPrice }) => {

    return <div className="G-padding-25">
        <Link to='/product'>
            <div className="product-box">
                <div className="hidden-cover">
                    <div className="product-image" style={{ backgroundImage: `url(${productImg})` }}>
                        <div className="cover-none">
                            <div className="img-cover">
                                <span className="prod-icon icon-cart G-center"></span>
                                <span className="prod-icon icon-heart G-center"></span>
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
        </Link>
    </div>
}
export default ProductItem
