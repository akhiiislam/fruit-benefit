import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { product } from "../types/types";

interface FruitDropdownProps {
  products: product[];
  selectedProduct: product;
  onSelectProduct: (product: product) => void;
}

export function FruitDropdown({
  products,
  selectedProduct,
  onSelectProduct,
}: FruitDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-left bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
      >
        {selectedProduct.name}
        <ChevronDown className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg">
          <ul className="py-1 overflow-auto text-base rounded-md max-h-60 focus:outline-none sm:text-sm">
            {products.map((product) => (
              <li
                key={product.id}
                className="cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-indigo-600 hover:text-white"
                onClick={() => {
                  onSelectProduct(product);
                  setIsOpen(false);
                }}
              >
                {product.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
