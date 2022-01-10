import React from 'react'
import './allDestination.css'
import kashmir from '../../images/kashmir.jpg';
import Star from '../SvgIcons/Star';
import Dollar from '../SvgIcons/Dollar';
import SearchBar from '../SearchBar/SearchBar';
import {ToursPackages} from './ToursPackages';
import { useHistory, useRouteMatch } from 'react-router-dom';

function AllDestination() {
    const history = useHistory();
    const { url } = useRouteMatch();

    return (
        <div className="allDestination">
            <div className="container">

                <SearchBar/>
                <div className="allDestination-block-container">
                    {
                        ToursPackages.map(({id,title,subtitle,rating,review,price})=>(
                        <div className="allDestination-block" onClick={()=>{
                            history.push(`/singleDestination/${id}`)
                        }}>
                            <div className="allDestination-img-container">
                                <img src={kashmir} alt="image" />
                            </div>
                            <div className="allDestination-content">
                                <h1 className="allDestination-title">{title}</h1>
                        <h2 className="allDestination-subtitle">{subtitle}</h2>
                                <div className="allDestination-overView">
                                    <p className="allDestination-rating"> <Star className="star"/> {review}</p>
                                    <p className="allDestination-review">{`(${rating} Review)`}</p>
                                </div>
                                <div className="allDestination-price-container">
                                    <Dollar className="dollar"/>
                                    <p>{price}</p>
                                </div>
                            </div>
    
                        </div>    
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default AllDestination
