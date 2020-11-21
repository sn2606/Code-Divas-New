import React, { useState } from "react";
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
  let languageStoredInLocalStorage = localStorage.getItem("language");
  let [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "English"
  );
  return (
    <>
    <Router>
      <Navbar 
       language={language}
       handleSetLanguage={language => {
         setLanguage(language);
         storeLanguageInLocalStorage(language);
       }} />
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

function storeLanguageInLocalStorage(language) {
  localStorage.setItem("language", language);
}

export default App;
