import slide1 from './css/images/home/grungy.jpg';
import slide2 from './css/images/home/crueish.jpg';
import slide3 from './css/images/home/traintracks2.jpg';
import slide4 from './css/images/home/sky2.jpg';
import slide5 from './css/images/home/glasshouse2.jpg';
import slide6 from './css/images/home/glasshouse.jpg';

import React from 'react';

const Carousel = () => {
  return(
    <div className="carousel slide carousel-fade" id="carouselExampleIndicators" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active"><img className="d-block w-100" src={slide1} alt="First slide"/></div>
        <div className="carousel-item"><img className="d-block w-100" src={slide2} alt="Second slide"/></div>
        <div className="carousel-item"><img className="d-block w-100" src={slide3} alt="Third slide"/></div>
        <div className="carousel-item"><img className="d-block w-100" src={slide4} alt="Fourth slide"/></div>
        <div className="carousel-item"><img className="d-block w-100" src={slide5} alt="Fifth slide"/></div>
        <div className="carousel-item"><img className="d-block w-100" src={slide6} alt="Sixth slide"/></div>
      </div>
      <button type="button" className="carousel-control-prev" href="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button type="button" className="carousel-control-next" href="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;