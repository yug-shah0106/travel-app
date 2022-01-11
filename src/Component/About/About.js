import React from 'react'
import travel from '../../images/travel.png'; 

function About() {
    return (
        <div className="about section">    
            <div className="container">
                <div className="section-flex">
                    <div className="section-left">
                        <div className="section-img-container">
                            <img src={travel} className="section-img" alt="cover-image"/>
                        </div>
                    </div>

                    <div className="section-right">
                        <div className="content"> 
                            <h1 className="title">FulFil your exclusive bucket list</h1>
                            <ul>
                                <li> Visit the Taj Mahal in Agra.</li>
                                <li>Sleep under the stars in the Great Thar Desert.</li>
                                <li>Be adventurous and go trekking in the Himalayas.</li>
                                <li>Explore the hidden caves within the Jaintia Hills.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
