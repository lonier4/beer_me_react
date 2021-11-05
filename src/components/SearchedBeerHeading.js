import React from'react';
import '../CSS.css'

const SearchedBeerHeading = (props) => {
    return (
        <div className='col heading'>
            <h1>{props.heading}</h1>
        </div>
    )
}
export default SearchedBeerHeading;