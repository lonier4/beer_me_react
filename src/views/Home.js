import React from "react";
import '../Home.css';

const Home =({imageSrc}) => {
    
        return (
            <div className="backgrnd">
                <img src={imageSrc} alt="bar" className="backImage"   />
                <h1>Welcome, let's drink!</h1>
            </div>
        )
    };

export default Home;
