import React from 'react';
import './BuyHeader.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function BuyHeader() {
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
                    <span className="header_optionLineTwo">Your Cart </span>
                    <span className="header_optionLineTwo header_basketCount">0</span>
                    
                </div>
            </div>
        </div>
    )
}

export default BuyHeader
