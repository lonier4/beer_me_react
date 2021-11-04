import React from "react";
import Drink from "../components/Drinks";
import '../CSS.css';

const Beer = (props) => {
    console.log(props.beers);
        return ( 
            <div className="allBeers">
                <div className="">
                {
                    !props.beers
                    ?
                    <h1>Waiting</h1>
                    :
                    Object.values(props.beers).map(bur => {
                        return <Drink bur={bur}/>
                    })
                }
                </div>
            </div>
        )
    };

export default Beer;