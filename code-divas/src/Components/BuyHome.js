import React from 'react'
import './BuyHome.css';
import Product from './Product'; 

function BuyHome() {
    return (
        <div className="home">
          <div className="home_container">
          <div className="home_row">
            <Product />
            <Product />
          </div>
          <div className="home_row">
          <Product />
          <Product /> 
          <Product />
          </div>
          <div className="home_row">
          <Product /> 
          </div>
        </div>
        </div>
    )
}

export default BuyHome
