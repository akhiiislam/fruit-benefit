"use client";

import { useState, useEffect } from "react";
import type { product } from "../types/types";
import { FruitTabs } from "./Tab";
import { SearchInput } from "./searchInput";
import { ProductList } from "./productList";

interface SidebarProps {
  products: product[];
  selectedProduct: product;
  onSelectProduct: (product: product) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export function Sidebar({
  products,
  selectedProduct,
  onSelectProduct,
  searchQuery,
  setSearchQuery,
}: SidebarProps) {
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [products, searchQuery]);

  return (
    <div className="w-80 border-r bg-white flex flex-col">
      <FruitTabs />
      <div className="p-4">
        <SearchInput value={searchQuery} onChange={setSearchQuery} />
      </div>
      <ProductList
        products={filteredProducts}
        selectedProduct={selectedProduct}
        onSelect={onSelectProduct}
      />
    </div>
  );
}
