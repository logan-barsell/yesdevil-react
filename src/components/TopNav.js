import React from 'react';
import NavLink from './NavLink';

import './css/TopNav.css';
import cart from './css/images/merch/cart.png';

const TopNav = ({ routes }) => {


  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top"><a className="navbar-brand yesdevil hvr-grow" href=".">YES DEVIL</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav justify-content-around">
          <NavLink routes={routes} />
        <a href="#!" className="nav-item nav-link snipcart-checkout">
          <button type="button" className="btn btn-danger cart-button" data-toggle="modal" data-target="#cart">
           Cart <img src={cart} alt=""/>
          </button>
        </a>
        </div>
      </div>
    </nav>
  );
}

export default TopNav;