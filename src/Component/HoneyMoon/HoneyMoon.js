import React from 'react'
import './honeymoon.css'
import beach from '../../images/beach.jpg';

function HoneyMoon() {
    return (
        <div className="honeymoon-container" style={{background:`linear-gradient(to right,rgba(0,0,0,.4),rgba(0,0,0,.2)),url(${beach})`, backgroundSize: 'cover' , backgroundPosition: '0 -550px' ,  backgroundRepeat: 'no-repeat'}}>
            <div className="honeymoon-content-container">
                <h1 className="honeymoon-title">Destinations for Honeymoon</h1>
                <h2 className="honeymoon-subtile">Book beautiful places for spending ime with your partner</h2>
                <h6 className="honeymoon-button"> View all Honeymoon Places</h6>
            </div>
        </div>
    )
}

export default HoneyMoon
