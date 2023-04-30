import React from "react";
import "/src/components/products/ProdCard.css";

function ProdCard({ name, imgURL, price, stock, onAddToCart }) {
  return (
    <div className="card-container">
      <div className="card-header">
        <h3>{name}</h3>
        <a href={imgURL} target="_blank"></a>
      </div>
      <img src={imgURL} alt={name} />
      <h4>$ {price}</h4>
      <h4>Stock: {stock}</h4>
      <button onClick={onAddToCart}>Add to cart.</button>
    </div>
  );
}

export default ProdCard;
