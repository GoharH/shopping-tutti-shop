import React from "react";
// import { useState } from "react";
// import Star from "./star-compo";
import './style.scss';

const StarRate = () => {
    const handleStarChange = (e) => {
        console.log(e.target.value)

    }

    return <div className="rating rating-set">
        <div className="rating-body">
            <div className="rating-active"></div>
            <div className="rating-items">
                <input type="radio" onChange={handleStarChange} className="rating-item" value="1" name="rating" />
                <input type="radio" onChange={handleStarChange} className="rating-item" value="2" name="rating" />
                <input type="radio" onChange={handleStarChange} className="rating-item" value="3" name="rating" />
                <input type="radio" onChange={handleStarChange} className="rating-item" value="4" name="rating" />
                <input type="radio" onChange={handleStarChange} className="rating-item" value="5" name="rating" />
                {/* <Star /> */}
            </div>
        </div>
        <div className="rating-value">(0)</div>
    </div>


}
export default StarRate



 // function StaticRange(testDiv, stars) {
    //     this.testDiv = document.querySelectorAll('.rating');
    //     this.stars = 0;

    //     this.getRating = () => {
    //             // frum enq bolor rating-neri vrayov
    //             for (let i = 0; i < ratings.length; i++) {
    //                 const rating = this.ratings[i];
    //                 // console.log(rating);
    //                 initRating(rating);
    //             }
    //         }
    //         //konkret reytingi stexcum
    //     this.initRating = (rating) => {
    //         this.initRatingVars(rating);
    //         this.setRatingActiveWidth();

    //         if (this.rating.classList.contains('rating-set')) {
    //             this.setRating(rating);
    //         }
    //     }

    //     // popoxakanneri stexcum
    //     this.initRatingVars = (rating) => {
    //             //     let ratingActive, ratingValue;
    //             this.ratingActive = rating.querySelector('.rating-active');
    //             this.ratingValue = rating.querySelector('.rating-value');
    //             // console.log(ratingValue)
    //         }
    //         // active astxi width-i %-i popoxutyun
    //     this.setRatingActiveWidth = (index = ratingValue.textContent) => { //ratingValue.innerHTML -ov chashxatec
    //         let ratingActiveWidth = index / 0.05;
    //         ratingActive.style.width = `${ratingActiveWidth}%`;
    //         // console.log(ratingActiveWidth)
    //         // console.log(index)
    //     }


    // }

    // // let starTen = new StaticRange('test-div', stars)