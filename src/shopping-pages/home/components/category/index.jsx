import React from "react";
import './style.scss';


const Category = ({ categoryImg, categoryName, categoryText }) => {
    return <div className="category-box G-flex">
        <div className="image-box">
            <div className="category-img" style={{ backgroundImage: `url(${categoryImg})` }}></div>
        </div>
        <div className="category-text">
            <h4 className="category-title">{categoryName}</h4>
            <p>{categoryText}</p>
        </div>
    </div>
}
export default Category