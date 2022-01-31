import React, { useState, useEffect } from 'react';
import { Collapse } from 'bootstrap';

const TrackListItem = ({ track, trackIndex, setTrackIndex }) => {
  

  const active = trackIndex === track.id;
  
  const activeClass = active ? 'active' : '';
  // const showClass = active ? '' : 'show';
  const evenStyles = (track.id % 2) === 1 ? 'even' : '';
  const headingId = `heading${track.id}`;
  const collapseId = `collapse${track.id}`;

  var [toggle, setToggle] = useState(false);
    
  useEffect(() => {
      var myCollapse = document.getElementById(`${collapseId}`);
      var bsCollapse = new Collapse(myCollapse, {toggle: true});
      
  });

  useEffect(() => {
    trackIndex === track.id && setToggle(toggle=>!toggle);
  }, []);

  const onClickFunc = () => {
 
    setToggle(toggle => !toggle);
    // setTrackIndex(track.id);
  };

  return (
    <>
      <div 
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

      <div id={collapseId} className={`show accordion-collapse collapse`} aria-labelledby={headingId} data-bs-parent="#buttonsAccordion">
        <button type="button" className="btn btn-primary btn-sm">Lyrics</button>
        <button type="button" className="btn btn-danger btn-sm">Get Song</button>
        <button type="button" className="btn btn-secondary btn-sm">Credits</button>
      </div>
    </>
  );
};

export default TrackListItem;