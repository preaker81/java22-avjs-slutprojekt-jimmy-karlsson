import React from "react";
import "/src/components/products/ProdCard.css";

function ProdCard({ name, imgURL, price, stock }) {
  return (
    <div className="card-container">
      <h3>{name}</h3>
      <img src={imgURL} alt={name} />
      <h4>$ {price}</h4>
      <h4>Stock: {stock}</h4>
      <button>Add to cart.</button>
    </div>
  );
}

export default ProdCard;
