import React from 'react';
import NavLink from './NavLink';

import './css/BottomNav.css';
import beer from './css/images/logos/beer.png';
import facebook from './css/images/icons/facebook.png';
import insta from './css/images/icons/insta.png';
import soundcloud from './css/images/icons/soundcloud.png';
import spotify from './css/images/icons/spotify.png';
import youtube from './css/images/icons/youtube.png';



const BottomNav = ({ routes }) => {
  return (
    <>
      <nav id="bottomNav" className="navbar navbar-light justify-content-around">

             {/* Button trigger modal */}
        <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#newsletterModal">
          Subscribe to our Newsletter
        </button>

        {/* Modal  */}
        <div className="modal fade" id="newsletterModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Yes Devil News</h5>
            
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form className="form-inline newsletter justify-content-center" action="https://formspree.io/contact@yesdevil.com" method="POST">
                <div className="modal-body">
                    <input className="form-control mr-sm-2" name="email" type="email" placeholder="Enter your email here" required="" />
                    <ul id="newsDetails">
                      <li>Stay informed on all upcoming events</li>
                      <li>Recieve updates on new music releases, music videos, and vlogs</li>
                      <li>Be notified of special deals, new merch, and giveaways</li>
                    </ul>
                    
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-dark" data-dismiss="modal">Close</button>
                  <button id="newsSub" className="btn btn-outline-light my-2 my-sm-0" value="send" type="submit">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>


        <button
            className="snipcart-add-item btn btn-outline-light beer"
            data-item-id="5"
            data-item-name="Buy a beer for the band!"
            data-item-price="1.00"
            data-item-weight="3"
            data-item-url="http://www.yesdevil.com"
            data-item-description="Yes Devil thanks you for your donation!"
            data-item-shippable="false"
            data-item-image="../static/css/images/logos/beer.png"
            >
            <img src={beer} alt=""/>Buy us a BEER!
        </button>

        <div className="iconsNav">
          <a className="" target="_blank" rel="noreferrer" href="https://www.facebook.com/YESDEVIL/"><img className="hvr-grow" src={facebook} alt="" /></a>
          <a className="w" target="_blank" rel="noreferrer" href="https://www.instagram.com/yes_devil/?hl=en"><img className="hvr-grow" src={insta} alt=""/></a>
          <a className="" target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC_jExvqWhRlM-gBt9iEsLxA"><img className="hvr-grow" src={youtube} alt=""/></a>
          <a className="w" target="_blank" rel="noreferrer" href="https://soundcloud.com/yesdevil"><img className="hvr-grow" src={soundcloud} alt="" /></a>
          <a className="" target="_blank" rel="noreferrer" href="https://open.spotify.com/album/0AHnuZiQ2wPtntjP9jOXHj?si=L2X71tETRMujmALGs8wzjg"><img className="hvr-grow" src={spotify} alt=""/></a>
        </div>

      </nav>
      <footer className="page-footer font-small mt-4">
        {/* Footer Links */}
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-7">
              <h5 className="text-uppercase">Disclaimer:</h5>
              <p>Viewer Discrection Advised.</p>
            </div>
            <div className="col-md-5">
              <h5 className="text-uppercase">Links</h5>
              <ul id="footer-links" className="list-unstyled">
                <li><NavLink routes={routes} menuToggle={() => null} /></li>
              </ul>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="footer-copyright py-3 text-center bg-light">© <script>document.write(new Date().getFullYear())</script> Copyright: <a href=".">yesdevil.com</a></div>
      </footer>
    </>
  );
}

export default BottomNav;