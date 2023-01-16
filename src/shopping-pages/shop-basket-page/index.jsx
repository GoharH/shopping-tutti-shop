import React from "react";
import './style.scss';
import product from '../../assets/images/product-3.jpg';

const ShopBasket = () => {

    return <div className="shop-cart-section">
        <div className="G-container">
            <div className="G-flex">
                <div className="card-products">
                    <table>
                        <tr className="table-header">
                            <th>Products</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Remove</th>
                        </tr>
                        <tr className="shop-table-line">
                            <td className="G-flex">
                                <span className="shop-prod-img" style={{ backgroundImage: `url(${product})` }}></span>
                                <p>Product Name</p>
                            </td>
                            <td>
                                <p>$150</p>
                            </td>
                            <td className="G-flex">
                                <p className="shop-product-number bg-color">-</p>
                                <p className="shop-product-number">1</p>
                                <p className="shop-product-number bg-color">+</p>
                            </td>
                            <td>
                                <p>$150</p>
                            </td>
                            <td>
                                <button className="prod-delete">x</button>
                            </td>
                        </tr>
                        <tr className="shop-table-line">
                            <td className="G-flex">
                                <span className="shop-prod-img" style={{ backgroundImage: `url(${product})` }}></span>
                                <p>Product Name</p>
                            </td>
                            <td>
                                <p>$150</p>
                            </td>
                            <td className="G-flex">
                                <p className="shop-product-number bg-color">-</p>
                                <p className="shop-product-number">1</p>
                                <p className="shop-product-number bg-color">+</p>
                            </td>
                            <td>
                                <p>$150</p>
                            </td>
                            <td>
                                <button className="prod-delete">x</button>
                            </td>
                        </tr>
                        <tr className="shop-table-line">
                            <td className="G-flex">
                                <span className="shop-prod-img" style={{ backgroundImage: `url(${product})` }}></span>
                                <p>Product Name</p>
                            </td>
                            <td>
                                <p>$150</p>
                            </td>
                            <td className="G-flex">
                                <p className="shop-product-number bg-color">-</p>
                                <p className="shop-product-number">1</p>
                                <p className="shop-product-number bg-color">+</p>
                            </td>
                            <td>
                                <p>$150</p>
                            </td>
                            <td>
                                <button className="prod-delete">x</button>
                            </td>
                        </tr>
                        <tr className="shop-table-line">
                            <td className="G-flex">
                                <span className="shop-prod-img" style={{ backgroundImage: `url(${product})` }}></span>
                                <p>Product Name</p>
                            </td>
                            <td>
                                <p>$150</p>
                            </td>
                            <td className="G-flex">
                                <p className="shop-product-number bg-color">-</p>
                                <p className="shop-product-number">1</p>
                                <p className="shop-product-number bg-color">+</p>
                            </td>
                            <td>
                                <p>$150</p>
                            </td>
                            <td>
                                <button className="prod-delete">x</button>
                            </td>
                        </tr>
                    </table>
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