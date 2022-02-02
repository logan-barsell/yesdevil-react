import React, { useState, useEffect } from 'react';
import { Collapse } from 'bootstrap';

const TrackListItem = ({ track, trackIndex, setTrackIndex }) => {
  

  const active = trackIndex === track.id;
  
  const activeClass = active ? 'active' : '';
  const evenStyles = (track.id % 2) === 1 ? 'even' : '';
  const headingId = `heading${track.id}`;
  const collapseId = `collapse${track.id}`;

  var [toggle, setToggle] = useState(false);
    
  useEffect(() => {
      var myCollapse = document.getElementById(`${collapseId}`);
      var bsCollapse = new Collapse(myCollapse, {toggle: false});
      trackIndex === track.id && toggle ? bsCollapse.show() : bsCollapse.hide()
  });

  useEffect(() => {
    trackIndex === track.id && setToggle(toggle=>!toggle);
  }, [trackIndex, track.id]);

  const onClickFunc = () => {
    setTrackIndex(track.id);
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

      <div id={collapseId} className='show accordion-collapse collapse row justify-content-center' aria-labelledby={headingId} data-bs-parent="#buttonsAccordion">
        <div className="col-md-4 d-grid gap-2">
          <button type="button" className="btn btn-outline-light btn-sm">Lyrics</button>
        </div>
        
        <div className="col-sm-4 d-grid gap-2">
          <button type="button" className="btn btn-danger btn-sm">Get Song</button>
        </div>
        
        <div className="col-sm-4 d-grid gap-2">
        <button type="button" className="btn btn-outline-light btn-sm">Credits</button>
        </div>
        
      </div>
    </>
  );
};

export default TrackListItem;