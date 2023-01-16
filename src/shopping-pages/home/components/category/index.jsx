import React from "react";
import './style.scss';
import category1 from '../../../../assets/images/cat-1.jpg';

const Category = () => {
    return <div className="category-box G-flex">
        <div className="image-box">
            <div className="category-img" style={{ backgroundImage: `url(${category1})` }}></div>
        </div>
        <div className="category-text">
            <h4 className="category-title">Category Name</h4>
            <p>100 products</p>
        </div>
    </div>
}
export default Category