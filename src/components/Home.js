import React from 'react';
import './css/Home.css';
import slide1 from './css/images/home/grungy.jpg';
import slide2 from './css/images/home/crueish.jpg';
import slide3 from './css/images/home/traintracks2.jpg';
import slide4 from './css/images/home/traintracks.jpg';
import slide5 from './css/images/home/sky2.jpg';
import slide6 from './css/images/home/glasshouse2.jpg';
import slide7 from './css/images/home/glasshouse.jpg';

const HomePage = () => {
  return (
    <div id="home">
      <div className="carousel slide parallax" id="carouselExampleIndicators" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active"><img className="d-block w-100" src={slide1} alt="First slide"/></div>
          <div className="carousel-item"><img className="d-block w-100" src={slide2} alt="Second slide"/></div>
          <div className="carousel-item"><img className="d-block w-100" src={slide3} alt="Third slide"/></div>
          <div className="carousel-item"><img className="d-block w-100" src={slide4} alt="Fourth slide"/></div>
          <div className="carousel-item"><img className="d-block w-100" src={slide5} alt="Fifth slide"/></div>
          <div className="carousel-item"><img className="d-block w-100" src={slide6} alt="Sixth slide"/></div>
          <div className="carousel-item"><img className="d-block w-100" src={slide7} alt="Seventh slide"/></div>
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




      {/* <ul className="nav upcomingshows justify-content-center" style="display: none;">

        <li className="nav-item">
          <h5>Upcoming Shows</h5>
        </li>
      </ul>  */}

      {/* <div id="upcomingshows">
 
        <div className="row justify-content-around">
          
          <div className="col-sm showad">
            <div className="card"><img className="card-img-top" src="../static/css/images/home/pirates.jpg" alt="PromoFlyer"/></div>
            <button className="btn btn-dark btn-block" type="button" data-toggle="collapse" data-target="#show1" aria-expanded="false" aria-controls="show1">Show Info</button>
            <div className="col-sm showinfo collapse multi-collapse" id="show1">
              <div className="card">
                <div className="card-body text-center">
                  <h5 className="card-title">Pirates of Emerson</h5>
                  <p className="card-text">Pleasanton, CA</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Dates: <span>10/5, 10/12, 10/19, 10/26, 11/4</span></li>
                  <li className="list-group-item">Time: <span>7pm-10/12pm</span></li>
                  <li className="list-group-item">Price:<span> $10 entry only, $30/35 haunted house pass</span></li>
                </ul>
              </div>
              
            </div>
            <button
                  className="snipcart-add-item btn btn-danger btn-block"
                  data-item-id="4"
                  data-item-name="Yes Devil @ The Study 5/25"
                  data-item-price="10.00"
                  data-item-weight="3"
                  data-item-url="http://www.yesdevil.com"
                  data-item-description="See Yes Devil LIVE @ The Study. ***IMPORTANT: All presale tickets ordered online will be available at WILL CALL under the name given (MUST HAVE ID TO PROVE IDENTITY) as soon as doors open the day of the show.***"
                  data-item-shippable="false"
                  >
                  Get Tickets
              </button>
              <button className="btn btn-danger btn-block">
                  <a href="https://piratesofemerson.fearticket.com/event/orderticket/eventid/351" className="gettix card-link" target="_blank">Get Tickets</a>
              </button>
          </div>
          <div className="col-sm showad">
            <div className="card"><img className="card-img-top" src="../static/css/images/home/pirates.jpg" alt="PromoFlyer"/></div>
            <div className="col-sm showinfo" id="show3">
              <div className="card">
                <div className="card-body text-center">
                  <h5 className="card-title">Pirates of Emerson</h5>
                  <p className="card-text">Pleasanton, CA</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Date: <span>10/5, 10/12, 10/19, 10/26, 11/4</span></li>
                  <li className="list-group-item">Time: <span>7pm-10/12pm</span></li>
                  <li className="list-group-item">Price:<span>$10 entry only, $30/35 haunted house pass</span></li>
                </ul>
              </div>
              
            </div>
            <button
                  className="snipcart-add-item btn btn-danger btn-block"
                  data-item-id="4"
                  data-item-name="Yes Devil @ The Study 5/25"
                  data-item-price="10.00"
                  data-item-weight="3"
                  data-item-url="http://www.yesdevil.com"
                  data-item-description="See Yes Devil LIVE @ The Study. ***IMPORTANT: All presale tickets ordered online will be available at WILL CALL under the name given (MUST HAVE ID TO PROVE IDENTITY) as soon as doors open the day of the show.***"
                  data-item-shippable="false"
                  >
                  Get Tickets
              </button>
               <button className="btn btn-danger btn-block">
                  <a href="https://piratesofemerson.fearticket.com/event/orderticket/eventid/351" className="card-link" target="_blank">Get Tickets</a>
              </button>
          </div>
         
        </div>
      </div>  */}



      
    </div>
  );
}

export default HomePage;