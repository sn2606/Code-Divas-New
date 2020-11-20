import React from 'react'
import img1 from './images/pot.jpg';
import './Product.css';

function Product() {
    return (
        <div className="product">
            <div className="product_info">
                <p>The lean Startup</p>
                <p className="product_price">
                    <small>Rs</small>
                    <strong>199</strong>
                </p>
                <div className="product_rating">
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>
                </div>                
            </div>
            <img class="img" src={img1} alt="Flower-pot" />
        </div>
    )
}

export default Product
