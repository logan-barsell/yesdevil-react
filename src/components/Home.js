import './css/Home.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import React from 'react';
import Carousel from './Carousel';
import SecondaryNav from './SecondaryNav';
import ShowAd from './ShowAd';

const HomePage = () => {
  return (
    <div id="home">

      <Carousel />

      <SecondaryNav label='Upcoming Shows' />

      <div id="upcomingshows">
        <div className="row justify-content-around">
          <ShowAd />         
        </div>
      </div> 
      
    </div>
  );
}

export default HomePage;