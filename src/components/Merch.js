import './css/Merch.css';

import React from 'react';
import SecondaryNav from './SecondaryNav';
import Products from './Products';



const MerchPage = () => {
  return (
    <div id="merch">
      
      <SecondaryNav label='Merchandise' />

      <div className="row container justify-content-around" id="product-list">
        <Products />
      </div>
    </div>

  );
}

export default MerchPage;