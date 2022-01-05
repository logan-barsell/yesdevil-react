import React from 'react';

import './css/Contact.css';
import phone from './css/images/icons/phone.svg';
import envelope from './css/images/icons/envelope-closed.svg';
import facebook from './css/images/icons/facebook.svg';
import insta from './css/images/icons/instagram.svg';
import youtube from './css/images/icons/youtube.svg';
import soundcloud from './css/images/icons/soundcloud.svg';
import spotify from './css/images/icons/spotify.svg';

const ContactPage = () => {
  return (
    <div className="container" id="contact">
      <div className="row">
        <div className="col-lg">
          <div className="jumbotron">
            <h5>Contact Information:</h5>
            <hr className="my-4"/>
            <p><img src={phone} alt=""/><a href="tel:+9252627761">925-262-7761</a></p>
            <hr className="my-4"/>
            <p><img src={envelope} alt=""/>&nbsp; <a href="mailto:contact@yesdevil.com">contact@yesdevil.com</a></p>
            <hr className="my-4"/>
            <div className="socmed contact">
              <a className="hvr-grow" href="https://www.facebook.com/YESDEVIL/" target="_blank"><img src={facebook}/></a>
              <a className="hvr-grow" href="https://www.instagram.com/yes_devil/?hl=en" target="_blank"><img src={insta}/></a>
              <a className="hvr-grow" href="https://www.youtube.com/channel/UC_jExvqWhRlM-gBt9iEsLxA" target="_blank"><img src={youtube}/></a>
              <a className="hvr-grow" href="https://soundcloud.com/yesdevil" target="_blank"><img src={soundcloud}/></a>
              <a className="hvr-grow" href="https://open.spotify.com/album/0AHnuZiQ2wPtntjP9jOXHj?si=L2X71tETRMujmALGs8wzjg" target="_blank"><img src={spotify}/></a></div>
          </div>
        </div>
        <div className="col-lg sendmsg">
          <form action="https://formspree.io/loganjbars@gmail.com" method="POST">
            <div className="form-group">
              <label htmlFor="emailAddress">Email address</label>
              <input className="form-control" id="emailAddress" type="email" name="email" placeholder="Enter Email"/>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input className="form-control" id="subject" name="subject" placeholder="Enter Subject"/>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" id="message" name="message" rows="3" placeholder="Enter Message"></textarea>
            </div>
            <button className="btn btn-primary btn-block btn-danger" type="submit" value="send">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;