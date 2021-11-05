import React, {useState} from "react";
import '../Beer.css';

const SearchCards = (props) => {

    return (
        <div className="card mb-3 beerCard" >
            <div className="row g-0 lagerCard">
                <div className="col-md-4">
                    <img src={props.search.image_url} className="img-fluid rounded-start beerImage" alt="Beer" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.search.name}</h5><br/>
                        <p className="card-text">{props.search.description}</p><br/>
                        <p className="card-text">ABV: {props.search.abv}%</p>
                        <p className="card-text">IBU: {props.search.ibu}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SearchCards;