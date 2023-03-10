import React, { useState } from "react";
import './style.scss';
import img from '../../assets/images/payments.png';
import AddressInfo from "../../components/address-info";
import CustomInput from "../../components/custom-input";


const Footer = () => {
    const [sign, setSign] = useState({
        email: ''
    })

    const handleChange = (e) => {
        setSign(e.target.name = e.target.value)
    }
    return <div className="footer-section">
        <div className="G-container">
            <div className="G-flex">
                <div className="G-padding-25">
                    <div className="get-in-touch">
                        <h3>GET IN TOUCH</h3>
                        <p className="touch-main">
                            No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor. Rebum tempor no vero est magna amet no
                        </p>
                        <AddressInfo />
                    </div>
                </div>
                <div className="G-padding-25">
                    <div className="quich-shop">
                        <h3>QUICK SHOP</h3>
                        <p>Home</p>
                        <p>Our Shop</p>
                        <p>Shop Detail</p>
                        <p>Shopping Card</p>
                        <p>Contact Us</p>
                    </div>
                </div>
                <div className="G-padding-25">
                    <div className="my-account">
                        <h3>MY ACCOUNT</h3>
                        <p>Home</p>
                        <p>Our Shop</p>
                        <p>Shop Detail</p>
                        <p>Shopping Card</p>
                        <p>Contact Us</p>
                    </div>
                </div>
                <div className="G-padding-25">
                    <div className="newsletter">
                        <h3>NEWS LETTER</h3>
                        <p className="newsletter-main">
                            Duo stet tempor ipsum sit amet magna ipsum tempor est
                        </p>
                        <div className="G-flex">
                            <CustomInput
                                name={'email'}
                                value={sign.email}
                                placeholder="Your Email Address"
                                onChange={handleChange}
                                className='footer-input' />
                            <button className="footer-input-btn">Sign Up</button>
                        </div>
                        <div>
                            <h4>FOLLOW US</h4>
                            <span className="footer-social-icon icon-twitter"></span>
                            <span className="footer-social-icon icon-facebook"></span>
                            <span className="footer-social-icon icon-linkedin"></span>
                            <span className="footer-social-icon icon-instagram"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom-part G-justify-between">
                <p>?? <a href="#" className="footer-link">GoharH</a>. All Rights will be Reserved. Designed by <a className="footer-link" href="file:///C:/Users/USER/Desktop/online-shop-website-template/index.html">HTML Codex</a></p>
                <span style={{ backgroundImage: `url(${img})` }} className='footer-payment-img'></span>
            </div>
        </div>
    </div>
}
export default Footer