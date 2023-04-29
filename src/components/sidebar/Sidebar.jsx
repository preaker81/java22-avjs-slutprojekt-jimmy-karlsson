import React from "react";
import "/src/components/sidebar/sidebar.css";
import white from "/src/img/w.png";
import blue from "/src/img/u.png";
import black from "/src/img/b.png";
import red from "/src/img/r.png";
import green from "/src/img/g.png";
import colorless from "/src/img/cl.png";

function Sidebar({ onColorCheckboxChange }) {
  return (
    <aside className="sidebar-left">
      <div className="filter-checkbox-container">
        <h3>Filter by Color</h3>
        <hr />
        <ul>
          <li>
            <img className="filter-checkbox-color" src={white} alt="white" />
            <input
              className="filter-checkbox"
              type="checkbox"
              value="W"
              onChange={onColorCheckboxChange}
            />
          </li>

          <li>
            <img className="filter-checkbox-color" src={blue} alt="blue" />
            <input
              className="filter-checkbox"
              type="checkbox"
              value="U"
              onChange={onColorCheckboxChange}
            />
          </li>

          <li>
            <img className="filter-checkbox-color" src={black} alt="black" />
            <input
              className="filter-checkbox"
              type="checkbox"
              value="B"
              onChange={onColorCheckboxChange}
            />
          </li>

          <li>
            <img className="filter-checkbox-color" src={red} alt="red" />
            <input
              className="filter-checkbox"
              type="checkbox"
              value="R"
              onChange={onColorCheckboxChange}
            />
          </li>

          <li>
            <img className="filter-checkbox-color" src={green} alt="green" />
            <input
              className="filter-checkbox"
              type="checkbox"
              value="G"
              onChange={onColorCheckboxChange}
            />
          </li>

          <li>
            <img
              className="filter-checkbox-color"
              src={colorless}
              alt="colorless"
            />
            <input
              className="filter-checkbox"
              type="checkbox"
              value="CL"
              onChange={onColorCheckboxChange}
            />
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
