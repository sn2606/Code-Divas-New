import React from 'react'
import './BuyHome.css';
import Product from './Product'; 
import img1 from './images/pot.jpg';
import img2 from './images/bag.jpg';
import img3 from './images/bangles.jpg';
import img4 from './images/Earrings.jpg';
import img5 from './images/Uradpapad.png';
import img6 from './images/Ghee.jpg';

function BuyHome() {
    return (
        <div className="home">
          <div className="home_container">
          <div className="home_row mt-20">
            <Product title='Flower Vase' price={199} image={img1} rating={5} />
            <Product title='Bamboo Bag' price={399} image={img2} rating={3}/>
          </div>
          <div className="home_row">
          <Product title='Bangles' price={199} image={img3} rating={4}/>
          <Product title='Earrings' price={250} image={img4} rating={2} /> 
          <Product title='Urad Dal Pappad' price={150} image={img5} rating={5}/>
          </div>
          <div className="home_row">
          <Product title='Desi Ghee' price={699} image={img6} rating={4}/> 
          </div>
        </div>
        </div>
    )
}

export default BuyHome
