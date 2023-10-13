import React from 'react';

function Product(props) {
  return (
    <div className = "centeredText">
      <h1>{props.name}</h1>
      <h2>{props.price}</h2>
      <h3>{props.rating}</h3>
      <img src={props.image} alt={props.name} className = "smallerImg" />
    </div>       
  );
}

export default Product;
