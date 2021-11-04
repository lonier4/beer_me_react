import React from "react";
import '../CSS.css';

const Drink = (props) => {
    return (
        <div className="card mb-3 beerCard" >
            <div className="row g-0 lagerCard">
                <div className="col-md-4">
                    <img src={props.bur.image_url} className="img-fluid rounded-start beerImage" alt="Beer" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.bur.name}</h5><br/>
                        <p className="card-text">{props.bur.description}</p><br/>
                        <p className="card-text">ABV: {props.bur.abv}%</p>
                        <p className="card-text">IBU: {props.bur.ibu}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Drink;