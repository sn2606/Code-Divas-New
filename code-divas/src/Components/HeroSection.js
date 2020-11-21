import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        
        <div className="hero-container"> 
 
           <h1 className="p-10">EMPOWERED EACHDAY, EVERYDAY!</h1> 

           <p className="justify-center p-10">Our project aims to help empower women who do not have conventional/formal education,
            are housewives that are completely dependent on their significant other, or belong to the economically deprived classes.
            Empowered is an integrated environment focusing on launching the products made by channelizing skills of women along with 
            providing workshops and sessions via recruiting volunteers for the same.
            This platform connects those who seek jobs with those who are in need of such workers.
            </p>
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
 