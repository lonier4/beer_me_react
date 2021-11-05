import React from "react";
import '../Beer.css';

const Beer = (props) => {
    const FavoritesComponent = props.favoritesComponent;

    return (
        <div className="allBeers">
            {
                !props.beers
                    ?
                    <h1>Waiting</h1>
                    :
                    Object.values(props.beers).map((bur, index) => (

                        <div className="card mb-3 beerCard" >

                            <div className="row g-0 lagerCard">
                                <div className="col-md-4 image-container">
                                    <img src={bur.image_url} className="img-fluid rounded-start beerImage" alt="Beer" />

                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{bur.name}</h5><br />
                                        <p className="card-description">{bur.description}</p><br />
                                        <p className="card-text">ABV: {bur.abv}%</p>
                                        <p className="card-text">IBU: {bur.ibu}</p>
                                        <div onClick={() => props.handleFavoritesClick(bur)} className="overlay d-flex align-items-center justify-content-center">
                                            <FavoritesComponent />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
            }

        </div>
    )
};

export default Beer;