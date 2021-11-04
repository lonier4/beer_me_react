import './App.css';
import React, {useState} from "react";
import { Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Beer from './views/Beer'
import axios from 'axios';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import bar from "./Images/bar.jpg";


const App = (props) => {
  

  const getBeers = async () => {
    let response = await axios.get('https://api.punkapi.com/v2/beers');
    return response.data
  }

  const utilizeBeersData = async () => {
    let data = await getBeers();
    setBeers(data);
    // console.log(beers);
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

    return (
    <div className="App">
      <Navbar user={user} setUser={setUser}/>
      <Switch>
        <Route exact path='/' render={() => <Home title={'Beer Me'} beers={beers} setBeers={setBeers} imageSrc={bar} /> } />
        <Route path='/allbeers' render={() => <Beer title={'Beer Me'} beers={beers} /> } />
        <Route path='/signin' render={() => <SignIn title={'Beer Me - Sign-In'} setUser={setUser} imageSrc={bar}/> } />
        <Route path='/signup' render={() =>  <SignUp title={'Beer Me - Sign-Up'} imageSrc={bar}/> } />
      </Switch>
    </div>
  );
};


export default App;
