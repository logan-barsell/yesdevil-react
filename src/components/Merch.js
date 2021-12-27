import React from 'react';

import './css/Merch.css';
import bracelet from './css/images/merch/bracelet1.jpg';
import shirt from './css/images/merch/shirt1.jpg';
import shirt2 from './css/images/aboutus/bio.jpeg';

const MerchPage = () => {
  return (
    <div id="merch">

      
      <ul className="nav merchstore justify-content-center">
        <li className="nav-item">
          <h5 className="text-center">Merchandise</h5>
        </li>
      </ul>
      <div className="row container" id="product-list">


        <div className="col-sm">
          <div className="card product"><img className="card-img-top" src={shirt} alt="Card image cap"/>

            <div className="card-body">
              <h5 className="card-title product-name">T-Shirt</h5>
            
              <div className="price">$<span>10.00</span></div>
              <button
                  className="snipcart-add-item btn btn-danger btn-block"
                  data-item-id="1"
                  data-item-name="Yes Devil T-Shirt (Style 1)"
                  data-item-price="10.00"
                  data-item-weight="135"
                  data-item-url="http://www.yesdevil.com"
                  data-item-description="Black shirt with YES DEVIL printed on the front."
                  data-item-custom2-name="Size"
                  data-item-custom2-options="Small|Medium|Large|X-Large"
                  data-item-image={shirt}>
                  Add to Cart
              </button>
            </div>

          </div>
        </div>

        <div className="col-sm">
          <div className="card product">

            <img className="card-img-top" src={shirt2} alt="Card image cap"/>

            <div className="card-body">
              <h5 className="card-title product-name">T-Shirt</h5>

              <div className="price">$<span>10.00</span></div>
              <button
                  className="snipcart-add-item btn btn-danger btn-block"
                  data-item-id="2"
                  data-item-name="Yes Devil T-Shirt (Style 2)"
                  data-item-price="10.00"
                  data-item-weight="135"
                  data-item-url="http://www.yesdevil.com"
                  data-item-description="Black shirt with Yes Devil Skull Logo printed on the front."
                  data-item-custom2-name="Size"
                  data-item-custom2-options="Small|Medium|Large|X-Large"
                  data-item-image={shirt2}>
                  Add to Cart
              </button>
            </div>
          </div>
        </div>


        <div className="col-sm">
          <div className="card product"><img className="card-img-top" src={bracelet} alt="Card image cap"/>

            <div className="card-body black-bg">
              <h5 className="card-title product-name black">Wristband</h5>
              {/* <p className="card-text"></p>  */}
              <div className="price white">$<span>3.00</span></div>
              <button
                  className="snipcart-add-item btn btn-danger btn-block"
                  data-item-id="3"
                  data-item-name="Yes Devil Wristband"
                  data-item-price="3.00"
                  data-item-weight="20"
                  data-item-url="http://www.yesdevil.com"
                  data-item-description="Black wristband with 'YES DEVIL' printed on the front and 'The High Cost of Living Low' on the back."
                  data-item-image={bracelet}>
                  Add to Cart
              </button>
            </div>

          </div>
        </div>

        <div className="col-sm-6 ghost"></div>

      </div>
    </div>

  );
}

export default MerchPage;