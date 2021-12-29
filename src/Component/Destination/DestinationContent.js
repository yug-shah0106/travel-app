import React from 'react'
import Location from '../SvgIcons/Location'
import Play from '../SvgIcons/Play'

function DestinationContent() {
    return (
        <div className="destination-content">
            <div className="container">
                <div className="destination-location">
                    <Location className="location"/> 
                    <h3>Kanufushi Island Baa Atoll, Maldives</h3>
                    <a href="#">view map</a>
                </div>

                <div className="destination-title-container">
                    <h1 className="title">Seaside Finolhu Maldives</h1>
                    <h2 className="subtitle">Grand Reopening: All-Inclusive Seaside Finolhu Maldives Overwater Luxury with Seaplane Transfers from Malé</h2>
                </div>

                <div className="destination-description-container">
                    <p>One of our best deals ever is back: surrender to tropical island life with an all-inclusive, overwater stay at Seaside Finolhu Maldives, a heavenly playground in the heart of the Maldives – now bigger and better than ever following an extensive transformation in late 2020. Ranked in the top 10% of all hotels and resorts worldwide in Tripadvisor's Travellers' Choice Awards in 2021 for the second year in a row, Seaside Finolhu is the first Maldives property to be part of the prestigious Design Hotels group. Dine in one of four exceptional beachside restaurants and check out the two-storey Beach Club, which operates day and night to entertain guests with live music, movie nights, and weekly White Party sundowners. In the heart of the resort, the dancefloor comes alive with vivid light shows, live DJs and jaw-dropping performances by world-class resident performance artists. A comprehensive library can be found upstairs above the Beach Bar – a quiet space which opens to an outdoor shisha lounge for those seeking some downtime. Practise your swing at the brand-new, state-of-the-art indoor golf studio, stretch it out in the Yoga Pavilion or hit the gym. When you're ready to indulge in some pampering, treat yourself to a spa treatment in one of 10 pastel-coloured treatment huts at Fehi Spa – an island-themed spa that’s sure to leave you feeling rested and rejuvenated.

                    This is the quintessential Maldives paradise you’ve always dreamed of. The resort is located across four islands in the UNESCO-protected Baa Atoll Biosphere Reserve, where you can soak up views of a crystalline lagoon and long, secluded stretches of white sand. A variety of water activities means you can make the most of your time here: from kayaking to windsurfing, paddle boarding, jet skiing, diving and snorkelling – take your pick. Succumb to absolute indulgence on this once-in-a-lifetime escape to one of the most spectacular destinations on Earth.
                    </p>

                    <h3>Your handpicked inclusions:</h3>
                    <ul>
                        <li>Arrive to vistas of the Baa Atoll Biosphere Reserve with roundtrip seaplane transfers from Malé</li>
                        <li>All-inclusive standard dining package: daily breakfast at Beach Kitchen, plus lunch and dinner at Beach Kitchen</li>
                        <li>All-inclusive standard drinks package: unlimited, free-flow select alcoholic and soft drinks</li>
                        <li>An upgraded dinner at the award-winning Asian-inspired restaurant Kanusan, once during your stay
                        </li>
                        <li>An upgraded beachfront dinner featuring North African cuisine at Arabian Grill, once during your stay</li>
                        <li>An upgraded seafood lunch at the award-winning Crab Shack, once during your stay</li>
                        <li>US$50 per adult, per day, and US$25 per child, per day, towards additional à la carte dining at Crab Shack, Kanusan or Arabian Grill</li>
                        <li>Enjoy a 30% discount on premium drinks, served by the glass only</li>
                        <li>Relax, knowing green tax charges are included (excludes extra guests)</li>
                        <li>One child aged 11 and under stays free with all-inclusive drinks and dining (transfers and green tax not included)</li>
                    </ul>

                    <h3>Travelling with friends or family?  <span>Upgrade to a Two-Bedroom Water Villa package for up to four guests and enjoy direct ocean access and a private eight-metre infinity pool.</span></h3>

                    <h3>Book with 100% Confidence:  <span>If for whatever reason you don’t want to go on your holiday, you can cancel right up to 14 days before check-in and get a 100% credit to use at Luxury Escapes for any other accommodation offer. Excludes flights, see the Fine Print for details.</span></h3>
                </div>

                <div className="destination-video">
                    <Play className="play" />
                    <h5>Watch Video</h5>
                </div>
            </div>    
        </div>
    )
}

export default DestinationContent
