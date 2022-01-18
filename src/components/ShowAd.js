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