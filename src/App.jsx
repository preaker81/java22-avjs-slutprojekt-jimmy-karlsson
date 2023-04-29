import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Products from "./components/products/Products";
import Sidebar from "./components/sidebar/Sidebar";
import "/src/app.css";
import { getFirebase } from "/src/js/firebase";

function App() {
  const [data, setData] = useState([]);
  const [selectedColors, setSelectedColors] = useState(new Set());

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getFirebase();
        console.log(result[0]);
        setData(result);
      } catch (error) {
        console.error("Error fetching data in MyComponent:", error);
      }
    }
    fetchData();
  }, []);

  // Function that is passed to Sidebar
  const handleColorCheckboxChange = (event) => {
    const color = event.target.value;
    const newSelectedColors = new Set(selectedColors);

    if (event.target.checked) {
      newSelectedColors.add(color);
    } else {
      newSelectedColors.delete(color);
    }

    setSelectedColors(newSelectedColors);
  };

  // Filter the DB data before passing to Products
  const filteredData = data.filter((item) =>
    item.colorIdentity.some((color) => selectedColors.has(color))
  );

  return (
    <div>
      <Header />
      <Sidebar onColorCheckboxChange={handleColorCheckboxChange} />
      <Products data={selectedColors.size > 0 ? filteredData : data} />
    </div>
  );
}

export default App;
