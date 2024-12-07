import { product } from "../types/types";

interface SearchBarProps {
  products: product[];
  setSelectedFruit: (fruit: product) => void;
}

function SearchBar({ products, setSelectedFruit }: SearchBarProps) {
  return (
    <div className="sidebar">
      {products.length > 0 ? (
        products.map((product) => (
          <div
            key={product.id}
            onClick={() => setSelectedFruit(product)}
            className="product-item"
          >
            <p>{product.name}</p>
          </div>
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}

export default SearchBar;
