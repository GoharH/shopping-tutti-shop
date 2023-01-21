import React from "react";
import './style.scss';
import bgimage1 from '../../assets/images/offer-1.jpg';
import bgimage2 from '../../assets/images/offer-2.jpg';

const Sales = ({ bgimage, saleText, saleTitle, }) => {
    return <>
        {/* <div className="G-padding-50 ">
            <div className="sales-img-box">
                <div style={{ backgroundImage: `url(${bgimage1})` }} className='sales-img figure'>
                    <div className="sales-text">
                        <p>SAVE 20%</p>
                        <h3>Special Offer</h3>
                        <button>Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="G-padding-50">
            <div className="sales-img-box">
                <div style={{ backgroundImage: `url(${bgimage2})` }} className='sales-img'>
                    <div className="sales-text">
                        <p>SAVE 20%</p>
                        <h3>Special Offer</h3>
                        <button>Shop Now</button>
                    </div>
                </div>
            </div>
        </div> */}

        {/* ARGUMENTOV  */}
        <div className="G-padding-50">
            <div className='sales-img-box'>
                <div style={{ backgroundImage: `url(${bgimage})` }} className='sales-img'>
                    <div className="sales-text">
                        <p>{saleText}</p>
                        <h3>{saleTitle}</h3>
                        <button>Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default Sales