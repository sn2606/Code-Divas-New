import React from "react";
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/pages/Home';
import Buy from './Components/pages/Buy';
import YourCart from './Components/pages/YourCart';
import Volunteer from './Components/pages/Volunteer';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/buy' exact component={Buy} />
        <Route path='/yourcart' exact component={YourCart} />
        <Route path='/volunteer' exact component={Volunteer} />
      </Switch>
      </Router>

    </>
  );
}

export default App;
