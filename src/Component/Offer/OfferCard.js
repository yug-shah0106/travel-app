import React from 'react'
import kashmir from '../../images/kashmir.jpg';
import Star from '../SvgIcons/Star'

function OfferCard() {
    return (
        <div className="offerCard-container">
            <div className="offerCard-img-container">
                <img src={kashmir} alt="" />
            </div>
            <div className="offerCard-content">
                <h2 className="offerCard-content-title">Agra, India</h2>
                
                <div className="offerCard-rating-container">
                    <Star className="star" />
                    <Star className="star" />
                    <Star className="star" />
                    <Star className="star" />
                </div>

                <div className="offerCard-pricing-container">
                    <h2 className="offer-pricing">From <span>$5000</span></h2>
                    <h3 className="offer-details">Details</h3>
                </div>
            </div>
        </div>
    )
}

export default OfferCard
