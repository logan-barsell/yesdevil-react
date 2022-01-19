import React from 'react';
import { pictureRows } from './PictureRows';

const Pictures = () => {

  const renderPictureRows = pictureRows.map(pictureRow => {
    return (
      <div key={pictureRow} className="row justify-content-around align-items-center">
        {pictureRow.map(picture => {
          return (
            <div key={picture} className="col-md-5">
              <div className="img-container"><img alt="" className="img-thumbnail" src={picture} /></div>
            </div>
          );
        })}
      </div>
    );
  });
  
  return (
    <div id="pictures">
      {renderPictureRows}
    </div>
  );
}

export default Pictures;