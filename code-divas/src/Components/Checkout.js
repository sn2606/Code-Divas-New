import React from 'react'
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import img1 from './images/pot.jpg';

function Checkout() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <div>
                    <h2 className="checkout_title text-lg">Your Shopping Basket</h2>
                    
                    {basket.map( item => (
                        <CheckoutProduct 
                         id={item.id}
                         title={item.title}
                         image={item.image}
                         price={item.price}
                         rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className="checkout_right">
                <h2>The Subtotal will go here</h2>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
