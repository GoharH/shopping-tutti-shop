import React from "react";
import './style.scss';
import StarRate from '../../components/star-rating';
import { Link } from "react-router-dom";


const ProductItem = ({ item }) => {

    return <div className="product-box-padding">
        <Link to={`/product/${item._id}`}>
            <div className="product-box">
                <div className="hidden-cover">
                    <div className="product-image" style={{ backgroundImage: `url(${item.image})` }}>
                        <div className="cover-none">
                            <div className="img-cover">
                                <span className="prod-icon icon-cart G-center"></span>
                                <span className="prod-icon icon-heart G-center"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-info">
                    <h3>{item.prodName}</h3>
                    <p className="prod-price">$ {item.price}</p>
                    {/* <p>{item.description}</p>
                     <p>Size: {item.size}</p>
                    <p>Color: {item.color}</p>  */}
                    <div>
                        <StarRate />
                    </div>
                </div>
            </div>
        </Link>
    </div>
}
export default ProductItem
