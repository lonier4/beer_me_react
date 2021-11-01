import React from "react";

const Beer = (props) => {
    console.log(props.beers);
        return ( 
            <div className="container">
                {
                    !props.beers
                    ?
                    <h1>Waiting</h1>
                    :
                    Object.values(props.beers).map((bur, index) => {
                        return <h1 key={index}>{bur.name}</h1>
                    })
                }
            </div>
        )
    };

export default Beer;