import React from "react";
import '../Beer.css'
import SearchedBeerHeading from '../components/SearchedBeerHeading';

const FavoriteBeer = (props) => {
    const FavoritesComponent = props.favoritesComponent;
    return (
        <div className="allBeers">
            <SearchedBeerHeading heading='Favorite Beers' />
            {
                !props.beers
                    ?
                    <h1>You haven't added any beers yet!</h1>
                    :
                    Object.values(props.beers).map((favorite, index) => (
                        <div className="card mb-3 beerCard" >
                            <div className="row g-0 lagerCard">
                                <div className="col-md-4">
                                    <img src={favorite.image_url} className="img-fluid rounded-start beerImage" alt="Beer" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{favorite.name}</h5><br />
                                        <p className="card-text">{favorite.description}</p><br />
                                        <p className="card-text">ABV: {favorite.abv}%</p>
                                        <p className="card-text">IBU: {favorite.ibu}</p>
                                        <div onClick={() => props.handleFavoritesClick(favorite)} className="overlay d-flex align-items-center justify-content-center">
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
}
export default FavoriteBeer;