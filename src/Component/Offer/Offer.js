import React from 'react'
import './offer.css';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import OfferCard from './OfferCard';

function Offer() {
    return (
        <div className="offer-container">
            <div className="container">
                <div className="offer-header-container">
                    <h1 className="offer-title">Special Offer</h1>
                    <hr className="offer-title-underline"/>
                    <h2 className="offer-subtitle">Check out our special offer tour</h2>
                </div>

                <div className="offer-swiper-container">
                    <Swiper
                        modules={[Autoplay,Navigation]}
                        loop={true}
                        navigation
                        spaceBetween={10}
                        autoplay={{ delay: 2500 }} 
                        slidesPerView={3}
                        breakpoints={{
                            "640": {
                                "slidesPerView": 2,
                            },
                            "768": {
                                "slidesPerView": 3,
                            },
                            "1024": {
                                "slidesPerView": 3,
                            }
                        }}
                    >
                        <SwiperSlide className="offer-swiper">
                            <OfferCard/>
                        </SwiperSlide>
                        <SwiperSlide className="offer-swiper">
                            <OfferCard/>
                        </SwiperSlide>
                        <SwiperSlide className="offer-swiper">
                            <OfferCard/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Offer
