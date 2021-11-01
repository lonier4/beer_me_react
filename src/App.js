import './App.css';
import React, {useState} from "react";
import { Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Beer from './views/Beer'
import axios from 'axios';

const App = (props) => {
  const [beers, setBeers] = useState([]);

  const getBeers = async () => {
    let response = await axios.get('https://api.punkapi.com/v2/beers?per_page=80');
    return response.data
  }

  const useBeersData = async () => {
    let data = await getBeers();
    setBeers(data);
    console.log(beers);
  }


    return (
    <div className="App">
      <Navbar useBeersData={useBeersData}/>
      <Switch>
        <Route exact path='/' render={() => <Home title={'Beer Me'} beers={beers} setBeers={setBeers} /> } />
        <Route path='/allbeers' render={() => <Beer title={'Beer Me'} beers={beers} /> } />
        </Switch>
    </div>
  );
};


export default App;
