import React from 'react'
import Facebook from '../SvgIcons/Facebook'
import LinkedIn from '../SvgIcons/LinkedIn'
import Pinterest from '../SvgIcons/Pinterest'
import Twitter from '../SvgIcons/Twitter'
import './footer.css'

function Footer() {
    return (
        <div className="footer-container">
            <div className="container-fluid">
            <div className="footer-column-container">

                <div className="footer-column">
                    <h4 className="footer-column-header-logo">TravelsWorld.</h4>
                    <div className="social-icon-container">
                        <div className="social-icon-block">
                            <Twitter className="twitter" />
                        </div>
                        <div className="social-icon-block">
                            <Facebook className="facebook" />
                        </div>
                        <div className="social-icon-block">
                            <LinkedIn className="linkedin" />
                        </div>
                        <div className="social-icon-block">
                            <Pinterest className="pinterest" />
                        </div>
                    </div>
                </div>


                <div className="footer-column">
                    <h4 className="footer-column-header">Information</h4>
                    <ul>
                        <li><a href="">About us</a></li>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Terms & Conditions</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4 className="footer-column-header">Detinations</h4>
                    <ul>
                        <li><a href="">Africa</a></li>
                        <li><a href="">Ocenia</a></li>
                        <li><a href="">Portugal</a></li>
                        <li><a href="">Switzerland</a></li>
                        <li><a href="">Canada</a></li>
                        <li><a href="">Australia</a></li>
                        <li><a href="">Norway</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4 className="footer-column-header">Adventure</h4>
                    <ul>
                        <li><a href="">The Cursed</a></li>
                        <li><a href="">Rock Climbing</a></li>
                        <li><a href="">Laugavegur</a></li>
                        <li><a href="">Diving</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4 className="footer-column-header">My Account</h4>
                    <ul>
                        <li><a href="">My Account </a></li>
                        <li><a href="">Order History</a></li>
                        <li><a href="">WishList</a></li>
                        <li><a href="">Newsletter</a></li>
                    </ul>
                </div>
            </div>  
          </div>  
        </div>
    )
}

export default Footer
