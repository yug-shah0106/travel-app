import React from 'react'
import SlideBanner from '../SlideBanner/SlideBanner';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './destination.css';
import 'swiper/css';
import 'swiper/css/navigation';
import DestinationContent from './DestinationContent';
import { useRouteMatch } from 'react-router-dom';

function Destination() {

    const test = useRouteMatch();
    console.log(test);
    return (
        <div className="destination">
            <Swiper
                modules={[Autoplay,Navigation]}
                loop={true}
                navigation
                autoplay={{ delay: 2500 }} 
            >
                <SwiperSlide className="swiper-sliderBanner">
                    <SlideBanner/>
                </SwiperSlide>
            </Swiper>

            <DestinationContent/>
        </div>
    )
}

export default Destination
