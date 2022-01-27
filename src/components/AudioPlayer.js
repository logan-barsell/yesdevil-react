import cover from './css/images/music/yesdevilgas.jpg';
import 'react-h5-audio-player/lib/styles.css';
import './css/AudioPlayer.css';

import React, { useState } from 'react';
import PlayerControls from 'react-h5-audio-player';
import TrackList from './TrackList';
import { trackInfo } from './trackInfo';

const AudioPlayer = () => {

  

  const [trackIndex, setTrackIndex] = useState(0);

  const handleClickPrevious = () => {
    setTrackIndex((currentTrack) =>
      currentTrack === 0 ? trackInfo.length - 1 : currentTrack - 1
    );
  };

  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < trackInfo.length - 1 ? currentTrack + 1 : 0
    );
  };

  const [playing, setPlaying] = useState(false);


  return(
    <div id="audio-player" className="row justify-content-center">
      <div className="col-md-6 col-10">
        <div>
          <img id="cover-img" src={cover}/>
        
          <PlayerControls
            src={trackInfo[trackIndex].src}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            showSkipControls={true}
            showJumpControls={false}
            onClickPrevious={handleClickPrevious}
            onClickNext={handleClickNext}
            layout='stacked-reverse'
          />
        </div>
        <TrackList trackIndex={trackIndex} setTrackIndex={setTrackIndex} playing={playing} />
      </div>
    </div>
  );
  
};

export default AudioPlayer;