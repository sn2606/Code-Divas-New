import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection(props) {
    let content = {
        English: {
          title: "EMPOWERED EACHDAY, EVERYDAY!",
          description:
            "Our project aims to help empower women who do not have conventional/formal education,are housewives that are completely dependent on their significant other, or belong to the economically deprived classes. Empowered is an integrated environment focusing on launching the products made by channelizing skills of women along with providing workshops and sessions via recruiting volunteers for the same.This platform connects those who seek jobs with those who are in need of such workers."
        },
        Malayalam: {
          title: "എല്ലാ ദിവസവും മെച്ചപ്പെടുത്തി!",
          description:
            "പരമ്പരാഗത / formal പചാരിക വിദ്യാഭ്യാസം ഇല്ലാത്ത, അവരുടെ പ്രധാനപ്പെട്ട മറ്റ് കാര്യങ്ങളെ പൂർണമായും ആശ്രയിക്കുന്ന അല്ലെങ്കിൽ സാമ്പത്തികമായി പിന്നാക്കം നിൽക്കുന്ന ക്ലാസുകളിൽ പെടുന്ന വീട്ടമ്മമാരാണ് സ്ത്രീകളെ ശാക്തീകരിക്കാൻ സഹായിക്കുകയെന്നതാണ് ഞങ്ങളുടെ പദ്ധതി. വോളണ്ടിയർമാരെ റിക്രൂട്ട് ചെയ്യുന്നതിലൂടെ വർക്ക് ഷോപ്പുകളും സെഷനുകളും നൽകിക്കൊണ്ട് സ്ത്രീകളുടെ കഴിവുകൾ ചാനൽ ചെയ്യുന്നതിലൂടെ നിർമ്മിച്ച ഉൽ‌പ്പന്നങ്ങൾ സമാരംഭിക്കുന്നതിൽ ശ്രദ്ധ കേന്ദ്രീകരിക്കുന്ന ഒരു സംയോജിത പരിസ്ഥിതിയാണ് എംപവർഡ്. ഈ വേദി അത്തരം തൊഴിലാളികളെ ആവശ്യമുള്ളവരുമായി ജോലി അന്വേഷിക്കുന്നവരെ ബന്ധിപ്പിക്കുന്നു."
        }
      };

      props.language === "Malayalam"
  ? (content = content.Malayalam)
  : (content = content.English);

    return (
        
        <div className="hero-container"> 

        <div className="hero-content ">
           <h1 className="p-10">{content.title}</h1> 

           <p className="justify-center p-10 pt-0">{content.description}
            </p>
        </div>
            <div className="hero-btns mb-10">
                <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    GET STARTED
                </Button>
            </div>
        </div>
        
    )
}

export default HeroSection 
 