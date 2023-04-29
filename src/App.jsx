import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Products from "./components/products/Products";
import Sidebar from "./components/sidebar/Sidebar";
import "/src/app.css";
import { getFirebase } from "/src/js/firebase";

function App() {
  const [data, setData] = useState([]);

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

  return (
    <div>
      <Header />
      <Sidebar />
      <Products data={data} setData={setData} />
    </div>
  );
}

export default App;
