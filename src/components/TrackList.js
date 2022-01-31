import React, { useState, useEffect } from 'react';
import { Collapse } from 'bootstrap';
import { trackInfo } from './trackInfo';
import TrackListItem from './TrackListItem';

const TrackList = ({ trackIndex, setTrackIndex }) => {

  // var [toggle, setToggle] = useState(true);
    
  // useEffect(() => {
  //     var myCollapse = document.getElementById(`collapse${trackIndex}`);
  //     var bsCollapse = new Collapse(myCollapse, {toggle: false});
  //     toggle ? bsCollapse.show() : bsCollapse.hide()
  // }, [toggle, trackIndex]);

  const renderTracks = trackInfo.map(track => {
    // const active = trackIndex === track.id;
    // const activeClass = active ? 'active' : '';
    // const showClass = active ? 'show' : '';
    // const openClass = active ? 'open' : '';
    // const evenStyles = (track.id % 2) === 1 ? 'even' : '';
    // const headingId = `heading${track.id}`;
    // const collapseId = `collapse${track.id}`;

    // const onClickFunc = () => {
    //   active ? 
    //   setToggle(toggle => !toggle) :
    //   setTrackIndex(track.id);
    // };

    return (
      <>

        <TrackListItem key={track.id} track={track} trackIndex={trackIndex} setTrackIndex={setTrackIndex} />
        {/* <div 
          id={headingId}
          key={track.id}
          className={`${activeClass} ${evenStyles} song row justify-content-between align-items-center`}
          onClick={()=> onClickFunc()}
          data-bs-toggle="collapse"
          data-bs-target={collapseId}
          aria-expanded={active} 
          aria-controls={collapseId}
        >
          <div className="col-auto align-self-center">
            <span>
              {track.name}
            </span>
          </div>
          <div className="col-auto align-self-center">
            <span>
              {track.time}
            </span>
          </div>
        </div>

        <div id={collapseId} class={`${showClass} ${openClass} accordion-collapse collapse`} aria-labelledby={headingId} data-bs-parent="#buttonsAccordion">
          <button type="button" class="btn btn-primary btn-sm">Lyrics</button>
          <button type="button" class="btn btn-danger btn-sm">Get Song</button>
          <button type="button" class="btn btn-secondary btn-sm">Credits</button>
        </div> */}
      </>
    );
  });
  return (
    <>
      {renderTracks}
    </>
  );
};

export default TrackList;