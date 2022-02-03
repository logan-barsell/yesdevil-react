import React from 'react';

const TrackButtons = ({ track, collapseId, headingId }) => {
  return (
    <div 
      id={collapseId}
      className='show accordion-collapse collapse row justify-content-center' 
      aria-labelledby={headingId} 
      data-bs-parent="#buttonsAccordion"
    >

      <div className="col-12 col-sm-4 d-grid gap-2">
        <button type="button" className="btn btn-outline-light btn-sm">Lyrics</button>
      </div>
      
      <div className="col-12 col-sm-4 d-grid gap-2">
        <button type="button" className="btn btn-danger btn-sm">Get Song</button>
      </div>
      
      <div className="col-12 col-sm-4 d-grid gap-2">
      <button type="button" className="btn btn-outline-light btn-sm">Credits</button>
      </div>
      
    </div>
  );
};

export default TrackButtons;