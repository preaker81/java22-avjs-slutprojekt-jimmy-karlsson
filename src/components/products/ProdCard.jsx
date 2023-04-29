import React from "react";
import "/src/components/products/ProdCard.css";

// TODO remove when DB connected
const tempName = "Temp Name";
const templateImg =
  "https://gatherer.wizards.com/Handlers/Image.ashx?type=card&multiverseid=200";
const tempPrice = "158,000";

function ProdCard() {
  return (
    <div className="card-container">
      <h3>{tempName}</h3>
      <img src={templateImg} alt="" />
      <h4>$ {tempPrice}</h4>
      <button>Add to cart.</button>
    </div>
  );
}

export default ProdCard;
