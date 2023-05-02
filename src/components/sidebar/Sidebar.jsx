import React from "react";
// Importing the sidebar stylesheet
import "/src/components/sidebar/sidebar.css";
// Importing color icons
import white from "/src/img/w.png";
import blue from "/src/img/u.png";
import black from "/src/img/b.png";
import red from "/src/img/r.png";
import green from "/src/img/g.png";
import colorless from "/src/img/cl.png";

function Sidebar({ onColorCheckboxChange, selectedColors }) {
  return (
    <aside className="sidebar-left">
      <div className="filter-checkbox-container">
        <h3>Filter by Color</h3>
        <hr />
        <ul>
          <li>
            <img className="filter-checkbox-color" src={white} alt="white" />
            {/* W stands for White following Magic the Gathering Community standard */}
            <input
              className="filter-checkbox"
              type="checkbox"
              value="W"
              onChange={onColorCheckboxChange}
              checked={selectedColors.has("W")}
            />
          </li>

          <li>
            <img className="filter-checkbox-color" src={blue} alt="blue" />
            {/* U stands for Blue following Magic the Gathering Community standard */}
            <input
              className="filter-checkbox"
              type="checkbox"
              value="U"
              onChange={onColorCheckboxChange}
              checked={selectedColors.has("U")}
            />
          </li>

          <li>
            <img className="filter-checkbox-color" src={black} alt="black" />
            {/* B stands for Black following Magic the Gathering Community standard */}
            <input
              className="filter-checkbox"
              type="checkbox"
              value="B"
              onChange={onColorCheckboxChange}
              checked={selectedColors.has("B")}
            />
          </li>

          <li>
            <img className="filter-checkbox-color" src={red} alt="red" />
            {/* R stands for Red following Magic the Gathering Community standard */}
            <input
              className="filter-checkbox"
              type="checkbox"
              value="R"
              onChange={onColorCheckboxChange}
              checked={selectedColors.has("R")}
            />
          </li>

          <li>
            <img className="filter-checkbox-color" src={green} alt="green" />
            {/* G stands for Green following Magic the Gathering Community standard */}
            <input
              className="filter-checkbox"
              type="checkbox"
              value="G"
              onChange={onColorCheckboxChange}
              checked={selectedColors.has("G")}
            />
          </li>

          <li>
            <img
              className="filter-checkbox-color"
              src={colorless}
              alt="colorless"
            />
            {/* CL stands for Colorless following Magic the Gathering Community standard */}
            <input
              className="filter-checkbox"
              type="checkbox"
              value="CL"
              onChange={onColorCheckboxChange}
              checked={selectedColors.has("CL")}
            />
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
