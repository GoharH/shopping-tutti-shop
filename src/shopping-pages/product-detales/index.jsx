import React, { useState } from "react";
import './style.scss';
import Slider from "react-slick";
//import carousel1 from '../../assets/images/product-1.jpg'
import StarRate from "../../components/star-rating";
import ProductDescription from "./product-description";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
//import StarRating from '../../components/star-rate1';

const ProductDetales = ({ productImg, productName, productPrice, productDescript }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const [isLoading, setIsLoading] = useState(false)
    const [productData, setProductData] = useState(null)


    const { id } = useParams()
    console.log(id);

    const getProductDetails = async () => {
        setIsLoading(true)
        const result = await axios.get(`https://crudcrud.com/api/b76e3217f8604a86b57ef256676003df/productList/${id}`)
        if (result.data) {
            console.log()
            setProductData(result.data)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getProductDetails()
    }, [])
    if (isLoading) {
        return <div>Loading....</div>
    }

    return productData && <div className="product-detales-section">
        <div className="G-container">
            <div className="G-flex">
                <div className="product-img-slide">
                    <Slider {...settings}>
                        <div >
                            <div style={{ backgroundImage: `url(${productData.image})` }} className='prod-slider-img'>  </div>
                        </div>
                        {/* <div >
                            <div style={{ backgroundImage: `url(${productImg})` }} className='prod-slider-img'>  </div>
                        </div> */}
                    </Slider>
                </div>
                <div className="product-info-detales">
                    <h2>{productData.prodName}</h2>
                    <div className="prod-rating">
                        <StarRate />
                        {/* <StarRating stars={stars} reviews={reviews} /> */}
                    </div>
                    <p className="prod-price">${productData.price}</p>
                    <p className="prod-text">{productData.description}</p>
                    <div className="prod-radio-inputs G-flex">
                        <p className="radio-input-title">Size: </p>
                        <label className="radio-input-label G-flex">
                            <input type="radio" name="prod-size" />
                            <p>XS</p>
                        </label>
                        <label className="radio-input-label G-flex">
                            <input type="radio" name="prod-size" />
                            <p>S</p>
                        </label>
                        <label className="radio-input-label G-flex">
                            <input type="radio" name="prod-size" />
                            <p>M</p>
                        </label>
                        <label className="radio-input-label G-flex">
                            <input type="radio" name="prod-size" />
                            <p>L</p>
                        </label>
                        <label className="radio-input-label G-flex">
                            <input type="radio" name="prod-size" />
                            <p>XL</p>
                        </label>
                    </div>
                    <div className="prod-radio-inputs G-flex">
                        <p className="radio-input-title">Color: </p>
                        <label className="radio-input-label G-flex">
                            <input type="radio" name="prod-color" />
                            <p>Black</p>
                        </label>
                        <label className="radio-input-label G-flex">
                            <input type="radio" name="prod-color" />
                            <p>White</p>
                        </label>
                        <label className="radio-input-label G-flex">
                            <input type="radio" name="prod-color" />
                            <p>Red</p>
                        </label>
                        <label className="radio-input-label G-flex">
                            <input type="radio" name="prod-color" />
                            <p>Blue</p>
                        </label>
                        <label className="radio-input-label G-flex">
                            <input type="radio" name="prod-color" />
                            <p>Green</p>
                        </label>
                    </div>
                    <div className="prod-shop-card G-flex">
                        <div className="G-flex product-number">
                            <button className="bg-color prod-shop-num">-</button>
                            <p className="prod-shop-num">1</p>
                            <button className="bg-color prod-shop-num">+</button>
                        </div>
                        <button className="prod-shop">Add To Card</button>
                    </div>
                </div>
            </div>
            <div className="product-info-description">
                <ProductDescription />
            </div>
        </div>
    </div>
}
export default ProductDetales