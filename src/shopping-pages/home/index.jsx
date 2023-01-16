import React from "react";
import './style.scss';
import Slider from "react-slick";
import { Link } from "react-router-dom";
import carousel1 from '../../assets/images/carousel-1.jpg';
import carousel2 from '../../assets/images/carousel-2.jpg';
import carousel3 from '../../assets/images/carousel-3.jpg';
import vendors1 from '../../assets/images/vendor-1.jpg';
import vendors2 from '../../assets/images/vendor-2.jpg';
import vendors3 from '../../assets/images/vendor-3.jpg';
import vendors4 from '../../assets/images/vendor-4.jpg';
import vendors5 from '../../assets/images/vendor-5.jpg';
import vendors6 from '../../assets/images/vendor-6.jpg';
import vendors7 from '../../assets/images/vendor-7.jpg';
import vendors8 from '../../assets/images/vendor-8.jpg';
import Sales from "../../components/sales-part";
import Category from "./components/category";
import ProductItem from "../../components/product-item";

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return <div className="home-section">
        <div className="G-container">
            <div>
                <div className="banner-section">
                    <div className="G-container">
                        <div className="banner-part G-flex">
                            <div className="slider">
                                <Slider {...settings}>
                                    <div>
                                        <div style={{ backgroundImage: `url(${carousel1})` }} className='slider-img'>
                                            <div className="image-cover">
                                                <div className="slide-text">
                                                    <h2>Man Fashion</h2>
                                                    <p>Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                                                    <button>Shop Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div style={{ backgroundImage: `url(${carousel2})` }} className='slider-img'>
                                            <div className="image-cover">
                                                <div className="slide-text">
                                                    <h2>Woman Fashion</h2>
                                                    <p>Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                                                    <button>Shop Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div style={{ backgroundImage: `url(${carousel3})` }} className='slider-img'>
                                            <div className="image-cover">
                                                <div className="slide-text">
                                                    <h2>Kids Fashion</h2>
                                                    <p>Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                                                    <button>Shop Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                            <div className="sales-part">
                                <Sales />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="advantages G-flex">
                    <div className="G-padding-25">
                        <div className="advantage-box">
                            <span class="advantage-icon icon-clipboard"></span>
                            <p>Quality Product</p>
                        </div>
                    </div>
                    <div className="G-padding-25">
                        <div className="advantage-box">
                            <span class="advantage-icon icon-cart"></span>
                            <p> Free Shipping</p>
                        </div>
                    </div>
                    <div className="G-padding-25">
                        <div className="advantage-box">
                            <span class="advantage-icon icon-tab"></span>
                            <p>14-Day Return</p>
                        </div>
                    </div>
                    <div className="G-padding-25">
                        <div className="advantage-box">
                            <span class="advantage-icon icon-phone"></span>
                            <p>24/7 Support</p>
                        </div>
                    </div>
                </div>
                <div className="categories">
                    <div className="G-page-title-sec">
                        <h2 className="G-page-title">CATEGORIES</h2>
                    </div>
                    <div className="categories-list G-flex">
                        <div className="G-padding-25">
                            <Category />
                        </div>
                        <div className="G-padding-25">
                            <Category />
                        </div>
                        <div className="G-padding-25">
                            <Category />
                        </div>
                        <div className="G-padding-25">
                            <Category />
                        </div>
                    </div>
                </div>
                <div className="featured-products">
                    <div className="G-page-title-sec">
                        <h2 className="G-page-title">FEATURED PRODUCTS</h2>
                    </div>
                    <div className="featured-product-list G-flex">
                        <div className="G-padding-25">
                            <Link to='/product'>
                                <ProductItem />
                            </Link>
                        </div>
                        <div className="G-padding-25">
                            <Link to='/product'>
                                <ProductItem />
                            </Link>
                        </div>
                        <div className="G-padding-25">
                            <Link to='/product'>
                                <ProductItem />
                            </Link>
                        </div>
                        <div className="G-padding-25">
                            <Link to='/product'>
                                <ProductItem />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="sales">
                    <Sales />
                </div>
                <div className="recent-product">
                    <div className="G-page-title-sec">
                        <h2 className="G-page-title">RECENT PRODUCTS</h2>
                    </div>
                    <div className="recent-product-list">
                        <div className="G-padding-25">
                            <ProductItem />
                        </div>
                    </div>
                </div>
                <div className="vendors G-justify-between">
                    <span className="home-vendors" style={{ backgroundImage: `url(${vendors1})` }}></span>
                    <span className="home-vendors" style={{ backgroundImage: `url(${vendors2})` }}></span>
                    <span className="home-vendors" style={{ backgroundImage: `url(${vendors3})` }}></span>
                    <span className="home-vendors" style={{ backgroundImage: `url(${vendors4})` }}></span>
                    <span className="home-vendors" style={{ backgroundImage: `url(${vendors5})` }}></span>
                    <span className="home-vendors" style={{ backgroundImage: `url(${vendors6})` }}></span>
                    <span className="home-vendors" style={{ backgroundImage: `url(${vendors7})` }}></span>
                    <span className="home-vendors" style={{ backgroundImage: `url(${vendors8})` }}></span>
                </div>
            </div>
        </div>
    </div>
}
export default Home