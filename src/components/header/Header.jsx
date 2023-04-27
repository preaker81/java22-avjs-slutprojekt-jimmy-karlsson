import React from "react";
import "/src/components/header/header.css";

function Header() {
  return (
    <header>
      <nav className="nav-bar">
        <img className="logo" src="/src/img/logo.png" alt="" />
        <ul className="nav-btn-list">
          <li>
            <button className="header-btn-prod">Products</button>
          </li>
          <li>
            <button className="header-btn-checkout">
              Shopping Cart
              <p className="header-btn-checkout-amount">100</p>
            </button>
          </li>
        </ul>
      </nav>

      <div className="searchbar">
        <input className="searchbar-input" type="text" />
        <button className="searchbar-btn">Search</button>
      </div>
    </header>
  );
}

export default Header;
