import React from "react";
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/pages/Home';
import Buy from './Components/pages/Buy';
import YourCart from './Components/pages/YourCart';
import Volunteer from './Components/pages/Volunteer';
import Hire from './Components/pages/Hire';
import Footer from './Components/Footer';
import Signup from './Components/Signup';

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
        <Route path='/hire' exact component={Hire} />
        <Route path='/sign-up' exact component={Signup} />
      </Switch>
      <Footer />
      </Router>

    </>
  );
}

export default App;
