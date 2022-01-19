import 'bootstrap/dist/js/bootstrap.bundle';

import React from 'react';
import { shows } from './ShowDetails';
import SnipcartButton from './SnipcartButton';

const ShowAd = () => {

  const renderShows = shows.map(show => {
    return (
      <div key={show.id} className="col-sm showad">
        <div className="card"><img className="card-img-top" src={show.picURL} alt="PromoFlyer"/></div>
        <div className="d-grid gap-2">
          <button 
            className="btn btn-dark"
            type="button"
            data-bs-toggle="collapse" 
            data-bs-target={`#show${show.id}`} 
            aria-expanded="false" 
            aria-controls={`show${show.id}`}>
            Show Info
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
            </svg>
          </button>
        </div>
        <div className="col-sm showinfo collapse multi-collapse" id={`show${show.id}`}>
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">{show.name}</h5>
              <p className="card-text">{show.location}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Dates: <span>{show.date}</span></li>
              <li className="list-group-item">Time: <span>{show.time}</span></li>
              <li className="list-group-item">Price:<span>{show.price}</span></li>
            </ul>
          </div>
        </div>
        <div className="d-grid gap-2">
          {show.ticketLink === null ? 
            <SnipcartButton data={show.snipcartData} />
            :
            <button className="btn btn-danger">
                <a href={show.ticketLink} className="gettix card-link" target="_blank" rel="noreferrer">Get Tickets</a>
            </button>
          }
        </div>
      </div>
    );
  });

  return (
    <>
      {renderShows}
    </>
  );
};

export default ShowAd;