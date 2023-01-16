import React from "react";
import './style.scss';
import Description from './description-component';

const ProductDescription = () => {

    return <div className="G-container">
        <div className="prod-description-header">
            <ul className="description-navigation">
                <li>
                    Description
                </li>
                <li>
                    Information
                </li>
                <li>
                    Reviews
                </li>
            </ul>
        </div>
        <div>
            <Description />
        </div>
    </div>
}
export default ProductDescription