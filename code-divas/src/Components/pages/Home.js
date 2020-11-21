import React, { useState} from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';

function Home() {
  let languageStoredInLocalStorage = localStorage.getItem("language");
  let [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "English"
  );
  
  return (
    <>
      <HeroSection language={language} />
    </>
  );
}


function storeLanguageInLocalStorage(language) {
  localStorage.setItem("language", language);
}

export default Home;