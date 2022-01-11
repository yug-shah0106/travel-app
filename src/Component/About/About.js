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
                                <li>See the 7 Wonders of world</li>
                                <li>Take a safari through africa</li>
                                <li>Take a hot air balloon ride</li>
                                <li>go snorekling in the blues reefs</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
