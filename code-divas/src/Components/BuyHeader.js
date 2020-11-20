import React from 'react';
import './BuyHeader.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function BuyHeader() {
    const [ {basket}, dispatch] =useStateValue();
    return (
        <div className="header">
            { /* Logo */ }
            <div className="header_search">
                <input className="header_searchInput" type="text" />
                <SearchIcon className="header_searchIcon" />
            </div>
            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionLineOne">Returns</span>
                    <span className="header_optionLineTwo">& Orders</span> 
                </div>
                <div className="header_optionBasket">
                    <ShoppingCartIcon />
                    <Link to='/yourcart' className="header_optionLineTwo">Your Cart </Link>
                    <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
                    
                </div>
            </div>
        </div>
    )
}

export default BuyHeader
