import axios from "axios";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import './style.scss';


const Category = ({ categoryImg, categoryName, categoryProductNumber }) => {


    //console.log(categoryName)
    return <div className="G-padding-25">
        <div className="category-box G-flex">
            <div className="image-box">
                <div className="category-img" style={{ backgroundImage: `url(${categoryImg})` }}></div>
            </div>
            <div className="category-text">
                <h4 className="category-title">{categoryName}</h4>
                <p>{categoryProductNumber}</p>
            </div>
        </div>
    </div>
}
export default Category