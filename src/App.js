import './App.css';
import React, {useState, useEffect} from "react";
import { Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Beer from './views/Beer'
import axios from 'axios';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import bar from "./Images/bar.jpg";
import SearchResults from "./views/SearchResults";
import AddFavorites from './components/AddFavorites';
import FavoriteBeers from './views/FavoriteBeers';
import RemoveFavorites from './components/RemoveFavorites';

const App = (props) => {
  

  const getBeers = async () => {
    let response = await axios.get('https://api.punkapi.com/v2/beers?per_page=80');
    console.log(response)
    return response.data
  }

  const utilizeBeersData = async () => {
    let data = await getBeers();
    setBeers(data);
    console.log(beers);
  }

  const [beers, setBeers] = useState(() => utilizeBeersData());

  const [user, setUser] = useState(
    {
      'id': null,
      'username': null,
      'email': null,
      'date_created': null
    }
  )

  let [userInput, setUserInput] = useState('');

  let [beerResults, setBeerResults] = useState([]);

  

const getBeerSearch = async (userInput) => {
  const url = `https://api.punkapi.com/v2/beers?beer_name=${userInput}`

  const response = await fetch(url);
  const responseJson = await response.json();
  
  if (responseJson) {
    setBeerResults(responseJson)
  }
};

useEffect(() => {
  getBeerSearch(userInput);
}, [userInput]);
  
const [favorites, setFavorites] = useState([]);

    const addFavoriteBeer = (bur) => {
        const newFavoriteList = [...favorites, bur];
        setFavorites(newFavoriteList);
      };
  
    const RemoveFavoriteBeer = (bur) => {
      const newFavoriteList = favorites.filter((favorite) => favorite.id != bur.id
      )
      setFavorites(newFavoriteList);
    };

    return (
    <div className="App">
      <Navbar user={user} setUser={setUser} userInput={userInput}/>
      <Switch>
        <Route exact path='/' render={() => <Home title={'Beer Me'} beers={beers} setBeers={setBeers} imageSrc={bar} /> } />
        <Route path='/allbeers' render={() => <Beer title={'Beer Me'} beers={beers} handleFavoritesClick={addFavoriteBeer} favoritesComponent={AddFavorites}/> } />
        <Route exact path='/favorite_beers' render={() => <FavoriteBeers beers={favorites} handleFavoritesClick={RemoveFavoriteBeer} favoritesComponent={RemoveFavorites} /> } />
        <Route exact path='/searchresults' render={() => <SearchResults beerResults={beerResults} /> } />
        <Route path='/signin' render={() => <SignIn title={'Beer Me - Sign-In'} setUser={setUser} imageSrc={bar}/> } />
        <Route path='/signup' render={() =>  <SignUp title={'Beer Me - Sign-Up'} imageSrc={bar}/> } />
      </Switch>
     
    </div>
  );
};


export default App;
