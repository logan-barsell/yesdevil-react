import React from 'react';

import './css/Bio.css';
import vango from './css/images/logos/vango.png';
import logan from './css/images/aboutus/logan0.jpg'
import matt from './css/images/aboutus/matt0.jpg';
import eyan from './css/images/aboutus/eyan0.jpg';


const BioPage = () => {
  return (
    <div id="aboutus">

      
      
      <div>

        <div className="container">

          <div className="row justify-content-center"><img className="aboutuspic" src={vango} alt=""/></div>

          <div className="row justify-content-center bio">
            <p><span>We are <span className="yesdevil">YES DEVIL</span></span> , a hard rock band currently based out of the San Francisco Bay Area. Our sound is shaped by a wide range of influences from a variety of genres. From the bluesy origins of rock 'n' roll to in your face heavy metal, we have a modern take on the classNameic sounds that have shaped rock music into what it is today. After releasing our first EP, <a href="https://itunes.apple.com/us/album/get-damned-ep/924263735" target="_blank">Get Damned</a>, under our original band name and line-up (<a href="https://www.reverbnation.com/se7endead">Se7en Dead</a>), a series of break-ups and line-up changes prompted us to rebrand ourselves a handful of times before finally re-emerging as Yes Devil. With our new full length album, <a className="link2music">The High Cost of Living Low</a>, we tie together years of experiences we've shared together as a band. These songs embody the essence of these experiences, the lives we've lived, the people we've met, and lessons we've learned. </p>
          </div>

        </div>

        <br/>


        <div className="members">

          <ul className="nav membersNav justify-content-center">
            <li className="nav-item">
              <h5>Members</h5>
            </li>
          </ul>

           <br/>

          <div className="container">

            <div className="logan row justify-content-center">
              <div><img src={logan} alt=""/></div>
              <div className="col ind-bio">
                <div className="row">
                  <p>Logan Barsell - Vocals and Guitar</p>
                </div>
                <div className="row">
                  <div className="a2a_kit a2a_kit_size_32 a2a_default_style a2a_follow"><a href="#!" className="a2a_button_facebook" data-a2a-follow="LoganBarsell"></a><a href="#!" className="a2a_button_instagram" data-a2a-follow="_logans__run_"></a><a href="#!" className="a2a_button_snapchat" data-a2a-follow="lbarsell"></a></div>
                </div>
              </div>
            </div>

            <hr/>

            <div className="matt row justify-content-center">
              <div><img src={matt} alt=""/></div>
              <div className="col ind-bio">
                <div className="row">
                  <p>Matt Abbott - Lead Guitar</p>
                </div>
                <div className="row">
                  <div className="a2a_kit a2a_kit_size_32 a2a_default_style a2a_follow"><a href="#!" className="a2a_button_facebook" data-a2a-follow="MattAbbott"></a><a href="#!" className="a2a_button_instagram" data-a2a-follow="mattabbott777"></a><a href="#!" className="a2a_button_snapchat" data-a2a-follow="deadringer_87"></a></div>
                </div>
              </div>
            </div>

            <hr/>

            <div className="eyan row justify-content-center">
              <div><img src={eyan} alt="" /></div>
              <div className="col ind-bio">
                <div className="row">
                  <p>Eyan Stran - Drums</p>
                </div>
                <div className="row">
                  <div className="a2a_kit a2a_kit_size_32 a2a_default_style a2a_follow"><a href="#!" className="a2a_button_facebook" data-a2a-follow="AddToAny"></a><a href="#!" className="a2a_button_instagram" data-a2a-follow="eyanstran"></a><a href="#!" className="a2a_button_snapchat" data-a2a-follow="helloexplode"></a></div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default BioPage;