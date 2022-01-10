import React from 'react'
import './gallery.css';
import kashmir from  '../../images/kashmir.jpg';
import banner1 from '../../images/banner1.jpg';

function Gallery() {
    return (
        <div className="gallery-container">
            <div className="container">
               <div className="gallery-header-container">
                    <h1 className="gallery-title">Destinations Gallery</h1>
                    <hr className="gallery-title-underline"/>
                    <p className="gallery-description">Our customer vibing on trip</p>           
                </div>

                <div className="gallery-image-grid">
                    <div className="gallery-grid-item">
                         <img src={kashmir} alt="" />
                    </div>
                    <div className="gallery-grid-item">
                         <img src={banner1} alt="" />
                    </div>
                    <div className="gallery-grid-item">
                         <img src={banner1} alt="" />
                    </div>
                    <div className="gallery-grid-item">
                         <img src={banner1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery
