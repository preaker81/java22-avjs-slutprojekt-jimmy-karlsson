import "/src/components/products/products.css";
import ProdCard from "./ProdCard";

function Products({ data, onAddToCart }) {
  return (
    <div className="product-container">
      {data.map((item) => (
        <ProdCard
          key={item.uuid}
          name={item.name}
          imgURL={item.imgURL}
          price={item.price}
          stock={item.stock}
          onAddToCart={() => onAddToCart(item)}
        />
      ))}
    </div>
  );
}

export default Products;
