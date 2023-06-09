import "/src/components/products/products.css";
import ProdCard from "./ProdCard";

function Products({
    data, // The array of product data
    addToCart, // function to add an item to the cart
    getCartItemQuantity, // get the quantity of a cart item
    searchInput // The input text used to filter products by name
}) {
  // Filter the product data by name based on the searchInput value
  const filteredDataByName = data.filter((item) =>
    item.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="product-container">
      {filteredDataByName.map((item) => (
        <ProdCard
          key={item.uuid}
          item={item} // Pass the current item as a prop to the ProdCard component
          addToCart={() => addToCart(item)} // Pass the addToCart function with the current item as an argument
          getCartItemQuantity={getCartItemQuantity} // Pass the getCartItemQuantity function
        />
      ))}
    </div>
  );
}

export default Products;
