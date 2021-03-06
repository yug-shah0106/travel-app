import React from 'react'
import banner from '../../images/banner1.jpg'; 
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './banner.css';
import 'swiper/css';
import 'swiper/css/pagination';

function Banner() {
    return (
        <div className="banner-container">
            <Swiper
                // install Swiper modules
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                // autoplay ={{
                //     delay:4000
                // }}
                pagination={{ clickable: true }}
                >
                <SwiperSlide className="slider-banner-container">
                    <img src={banner} className="slider-banner-image" alt="Beach image" />
                    <div className="swiper-content-container">
                        <h2 className="swiper-content-subtitle">Enjoy the vibes of every moment</h2>
                        <h1 className="swiper-content-title">Find N Vibe</h1>
                        <div className="swiper-content-button-container">
                           <a href="#" className="swiper-content-button">Get in touch</a>
                        </div>
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide className="slider-banner-container">
                    <img src={banner} className="slider-banner-image" alt="Beach image" />
                    <div className="swiper-content-container">
                        <h5 className="swiper-content-multiple">Planning a vacation anytime soon?</h5>
                        <h6 className="swiper-content-submultiple">well why not enjoy the vibe of these places.</h6>
                        <div className="swiper-content-button-container">
                         <a href="#" className="swiper-content-button">Explore Places</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slider-banner-container">
                    <img src={banner} className="slider-banner-image" alt="Beach image" />
                    <div className="swiper-content-container">
                        <div className="swiper-content-button-container">
                            <a href="#"><h5 className="swiper-content-multiple">Honeymoon Vibes</h5></a>
                            <a href="#"><h5 className="swiper-content-multiple">Family Vibes</h5></a>
                            <a href="#"><h5 className="swiper-content-multiple">Friendship Vibes</h5></a>
                            <a href="#"><h5 className="swiper-content-subtitle">Solo Vibes</h5></a>
                        </div>
                    </div>
                </SwiperSlide> */}
            </Swiper>
        </div>
    )
}

export default Banner
