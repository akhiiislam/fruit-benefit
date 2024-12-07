import { cn } from "../lib/utils";
import type { product } from "../types/types";

interface ProductListProps {
  products: product[];
  selectedProduct: product;
  onSelect: (product: product) => void;
}

export function ProductList({
  products,
  selectedProduct,
  onSelect,
}: ProductListProps) {
  return (
    <div className="py-4">
      <h2 className="px-4 text-sm font-medium text-gray-500 mb-2">
        Fruits List
      </h2>
      <div className="space-y-1">
        {products.map((product) => (
          <button
            key={product.id}
            onClick={() => onSelect(product)}
            className={cn(
              "w-full flex items-start gap-3 px-4 py-2 text-left",
              selectedProduct.id === product.id && "bg-orange-50"
            )}
          >
            <img
              src={product.icon}
              alt={product.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <div className="font-medium">{product.name}</div>
              <div className="text-sm text-gray-500">
                Vitamin {product.vitamins.join(", ")}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
