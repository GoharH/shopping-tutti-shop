import React from "react";
import './style.scss';
import product from '../../assets/images/product-3.jpg';
import ShopProduct from './shop-basket-product';

const ShopBasket = () => {

    return <div className="shop-cart-section">
        <div className="G-container">
            <div className="G-flex">
                <div className="card-products">
                    <ul className="table-header">
                        <li>Products</li>
                        <li>Price</li>
                        <li>Quantity</li>
                        <li>Total</li>
                        <li>Remove</li>
                    </ul>
                    <ul>
                        <li>
                            <ShopProduct product={product}
                                productName='Product Name'
                                productPrice="150"
                                productTotalPrice='150' />
                        </li>
                    </ul>
                </div>
                <div className="shop-summery-part">
                    <div className="coupon-code-box">
                        <label className="G-flex">
                            <input type="number" name="coupon-number" className="coupon-input" placeholder="Coupon Code" />
                            <button className="coupon-btn">Apply Coupon</button>
                        </label>
                    </div>
                    <div className="shop-summary-title">
                        <h3>CART SUMMARY</h3>
                    </div>
                    <div className="cart-summary">
                        <div className="border-bot">
                            <div className="G-justify-between">
                                <p>Subtotal</p>
                                <p>$150</p>
                            </div>
                            <div className="G-justify-between">
                                <p>Shipping</p>
                                <p>$10</p>
                            </div>
                        </div>
                        <div className="total-sum G-justify-between">
                            <p>Total</p>
                            <p>$160</p>
                        </div>
                        <button className="prod-check-btn">Product To Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default ShopBasket