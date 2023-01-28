import React from "react";
import './style.scss';

const CategoryInAdmin = ({ title, btnTitle }) => {

    const handleClick = () => {

    }
    return <div className="G-page-section">
        <div className='G-page-header'>
            <h3 className="G-header-title">{title}</h3>
        </div>
        <div className="G-page-scroll-body">
            <div className="G-page-btn">
                <button className="page-btn" onClick={handleClick}>Add a {btnTitle}</button>
            </div>
            <div className="G-page-creating">
                <p>Category1</p>
            </div>
        </div>

    </div>
}
export default CategoryInAdmin