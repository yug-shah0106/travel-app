import React from 'react'
import './card.css';
import Location from '../SvgIcons/Location';
import { useHistory } from 'react-router-dom';

function Card({src,cardTitle,subTitle}) {
    const history = useHistory();

    return (
        <div className="card-block" onClick={()=>{
            history.push(`/allDestination?${cardTitle}`);
        }}>
            <div className="card-img-container">
                <img src={src} alt="kashmir" />
            </div>
            <div className="card-location-container">
                <h1 className="card-title">{cardTitle}</h1>
                <div className="card-location-subcontainer">
                    <Location className="location"/>
                    <h2 className="card-subtitle">{subTitle}</h2>
                </div>
            </div>
        </div>
    )
}

export default Card
