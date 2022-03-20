import React from 'react';
import './style.css';

const Product = ({image, name, description, price, popisek}) => {
  return(
    <div className="products">
      <div className="product">
        <img className="product__image" src={`/assets/${image}`} alt={popisek} />
        <div className="product__content">
          <h3 className="product__name">{name}</h3>
          <p className="product__description">{description}</p>
          <p className="product__price">{price} Kč</p>
        </div>
      </div>
    </div>
  )
};

export default Product;