import React, { useState } from 'react';
import Songs from './Songs';
import Lyrics from './Lyrics';
import { songs } from './SongInfo';
import SongCredits from './SongCredits';

import './css/Music.css';
import cover1 from './css/images/photogallery/yesdevilgas.jpg';
import itunes from './css/images/music/itunes.png';

const MusicPage = () => {
  
  const [activeTab, setActiveTab] = useState(0);
  
  const tabOptions = ['Songs', 'Lyrics', 'Credits'];

  const tabSelection = tabOptions.map((tab, index) => {
    const active = index === activeTab ? 'active' : '';
    return (
      <li key={index} className="nav-item">
        <a 
          href="#!"
          className={`nav-link ${active}`}
          onClick={() => setActiveTab(index)}
        >
          {tab}
        </a>
      </li>
    );
  });

  
  return (
    <div id="music">
      <ul className="nav thcoll justify-content-center">
        <li className="nav-item">
          <h5 className="text-center" id="alboom">The High Cost of Living Low </h5>
        </li>
      </ul>
      <div className="row justify-content-center">
        <div className="col img-container">
          <img id="album-cover" src={cover1} alt=""/>

          <div className="dropdown hcll">
            <button className="btn btn-danger buyalbum dropdown-toggle" id="buyalbum" data-bs-toggle="dropdown" type="button" aria-expanded="false">
              Buy Album
            </button>
            <ul className="dropdown-menu" aria-labelledby="buyalbum">
              <li>
                <a href="#" className="dropdown-item">
                  <img className="itunes" src={itunes} alt=""/>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
      <div className="row justify-content-center album">
        <div id="album-stuff">
          <ul className="nav nav-tabs justify-content-center album-tab">
            {tabSelection}
          </ul>

          <ul className="list-group justify-content-center" id="songs">
            <Songs songs={songs} />
          </ul>

          <ul className="list-group" id="lyrics">
            <Lyrics songs={songs} />
          </ul>

          <div id="credits">
            <SongCredits />
          </div>

        </div>
      </div>
    </div>

  );
}

export default MusicPage;