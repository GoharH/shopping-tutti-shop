import React from "react";
import { useSelector } from "react-redux";
import './style.scss';


const Category = ({ categoryImg, categoryName, categoryText }) => {
    const categoryList = useSelector(state => state.CategoryReducer.categoryList)

    console.log(categoryName)
    return <div className="G-padding-25">
        <div className="category-box G-flex">
            <div className="image-box">
                <div className="category-img" style={{ backgroundImage: `url(${categoryImg})` }}></div>
            </div>
            <div className="category-text">
                <h4 className="category-title">{categoryName}</h4>
                <p>{categoryText}</p>
            </div>
        </div>
    </div>
}
export default Category