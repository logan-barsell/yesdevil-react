import React from 'react';

const SnipcartButton = ({ data }) => {

  return (
    <button
      className="snipcart-add-item btn btn-danger"
      data-item-id={data.itemId}
      data-item-name={data.itemName}
      data-item-price={data.itemPrice}
      data-item-weight={data.itemWeight}
      data-item-url={data.itemUrl}
      data-item-description={data.itemDesc}
      data-item-shippable={data.isShippable}
      data-item-image={data.itemImg}
      data-item-custom2-name={data.custom2Name ? data.custom2Name : null}
      data-item-custom2-options={data.custom2Options ? data.custom2Options : null}
      >
      {data.label}
    </button>
  );
};

export default SnipcartButton;