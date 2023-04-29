import Header from "./components/header/Header";
import Products from "./components/products/Products";
import Sidebar from "./components/sidebar/Sidebar";
import "/src/app.css";

function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Products />
    </div>
  );
}

export default App;
