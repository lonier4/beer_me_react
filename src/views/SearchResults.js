import React from 'react';
import SearchedBeerHeading from '../components/SearchedBeerHeading';


const SearchResult = (props) => {

    return (
        <div className="allBeers">
            <SearchedBeerHeading heading='Search Beers' />
            {
                !props.beerResults
                    ?
                    <h1>No results yet..Go ahead and search for a beer!</h1>
                    :
                    Object.values(props.beerResults).map((search, index) => (
                        <div className="card mb-3 beerCard" >
                            <div className="row g-0 lagerCard">
                                <div className="col-md-4">
                                    <img src={search.image_url} className="img-fluid rounded-start beerImage" alt="Beer" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{search.name}</h5><br />
                                        <p className="card-text">{search.description}</p><br />
                                        <p className="card-text">ABV: {search.abv}%</p>
                                        <p className="card-text">IBU: {search.ibu}</p>
                                    </div>
                                </div>
                            </div>
                        </div>



                    ))
            }
        </div>
    )
}

export default SearchResult;
// return <SearchCards key={index} search={search}/>