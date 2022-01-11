import React from 'react'
import Facebook from '../SvgIcons/Facebook'
import LinkedIn from '../SvgIcons/LinkedIn'
import Instagram from '../SvgIcons/Instagram'
import Twitter from '../SvgIcons/Twitter'
import './footer.css'

function Footer() {
    return (
        <div className="footer-container">
            <div className="container-fluid">
            <div className="footer-column-container">

                <div className="footer-column">
                    <h4 className="footer-column-header-logo">Find N Vibe Tours and Events Pvt Ltd</h4>
                    <div className="social-icon-container">
                        <div className="social-icon-block">
                            <a href="https://twitter.com/findnvibe?t=XiFe9rk2AwoyGPJvsvah3Q&s=09"><Twitter className="twitter" /></a>
                        </div>
                        <div className="social-icon-block">
                            <a href="https://www.facebook.com/findnvibe/"><Facebook className="facebook" /></a>
                        </div>
                        <div className="social-icon-block">
                            <a href="https://www.linkedin.com/company/find-n-vibe-tours-and-events-private-limited"><LinkedIn className="linkedin" /></a>
                        </div>
                        <div className="social-icon-block">
                            <a href="https://instagram.com/_find_n_vibe_?utm_medium=copy_link"><Instagram className="Instagram" /></a>
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
                        <li><a href="">Delhi</a></li>
                        <li><a href="">Delhi</a></li>
                        <li><a href="">Delhi</a></li>
                        <li><a href="">Delhi</a></li>
                        <li><a href="">Delhi</a></li>
                        <li><a href="">Delhi</a></li>
                        <li><a href="">Delhi</a></li>
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

                {/* <div className="footer-column">
                    <h4 className="footer-column-header">My Account</h4>
                    <ul>
                        <li><a href="">My Account </a></li>
                        <li><a href="">Order History</a></li>
                        <li><a href="">WishList</a></li>
                        <li><a href="">Newsletter</a></li>
                    </ul>
                </div> */}
                <div className="footer-column">
                    <h6>copyright to Find N Vibe Tours and Events Pvt Ltd</h6>
                </div>
            </div>  
          </div>  
        </div>
    )
}

export default Footer
